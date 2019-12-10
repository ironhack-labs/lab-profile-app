"use strict";

const { Router } = require("express");
const router = new Router();
const User = require("./../models/user");
const bcryptjs = require("bcryptjs");

router.post("/signup", async (req, res, next) => {
  const { username, password, campus, course, image } = req.body;
  try {
    const hash = await bcryptjs.hash(password, 10);
    const user = await User.create({
      username,
      campus,
      course,
      image,
      passwordHash: hash
    });
    req.session.user = user._id;
    res.json({ user });
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username }).exec();
    if (!user) throw new Error("There's no user with that email.");
    const result = await bcryptjs.compare(password, user.passwordHash);
    if (!result) throw new Error("Wrong password.");
    req.session.user = user._id;
    res.json({ user });
  } catch (error) {
    next(error);
  }
});

router.patch("/edit/:id", async (req, res, next) => {
  const { username, campus, course, password } = req.body;
  const userId = req.params.id;
  let hash;
  try {
    if (password) {
      hash = await bcryptjs.hash(password, 10);
    }
    const user = await User.findByIdAndUpdate(userId, {
      ...(username && { username }),
      ...(campus && { campus }),
      ...(course && { course }),
      ...(password && { passwordHash: hash })
    }).exec();
    res.json({ user });
  } catch (error) {
    next(error);
  }
});

router.post("/logout", (req, res, next) => {
  req.session.destroy();
  res.json({});
});

const routeGuard = require("./../middleware/route-guard");

router.get("/loggedin", routeGuard, async (req, res, next) => {
  const userId = req.session.user;
  if (!userId) {
    res.json({});
  } else {
    try {
      const user = await User.findById(userId);
      if (!user) throw new User("Signed in user not found");
      res.json({ user });
    } catch (error) {
      next(error);
    }
  }
});

const multerMiddleware = require("./../middleware/multer-configuration");

router.patch(
  "/upload/:id",
  multerMiddleware.single("image"),
  async (req, res, next) => {
    const userId = req.params.id;
    const image = req.file.url;
    try {
      const user = await User.findByIdAndUpdate(userId, { image });
      res.json({ user });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
