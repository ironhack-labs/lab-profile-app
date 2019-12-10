"use strict";

const { Router } = require("express");
const router = new Router();
const User = require("./../models/user");
const bcryptjs = require("bcryptjs");

const multerMiddleware = require("./../middleware/multer-configuration");

router.post("/sign-up", async (req, res, next) => {
  const { username, course, campus, password } = req.body;
  console.log(req.body);
  try {
    const hash = await bcryptjs.hash(password, 10);
    const user = await User.create({
      username,
      campus,
      course,
      passwordHash: hash
    });
    req.session.user = user._id;
    res.json({ user });
  } catch (error) {
    next(error);
  }
});

router.post("/sign-in", async (req, res, next) => {
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

router.post("/sign-out", (req, res, next) => {
  req.session.destroy();
  res.json({});
});

const routeGuard = require("./../middleware/route-guard");

router.get("/user-information", routeGuard, async (req, res, next) => {
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

module.exports = router;
