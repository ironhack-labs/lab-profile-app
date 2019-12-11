"use strict";

const { Router } = require("express");
const router = new Router();
const User = require("./../models/user");
const bcryptjs = require("bcryptjs");

router.post("/sign-up", async (req, res, next) => {
  const { username, campus, course, password } = req.body;
  try {
    const hash = await bcryptjs.hash(password, 10);
    const user = await User.create({
      username,
      campus,
      course,
      passwordHash: hash
    });
    req.session.user = user._id;
    res.json({ user, message: "user successfully created" });
  } catch (error) {
    next(error);
  }
});

router.post("/sign-in", async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username }).exec();
    if (!user) throw new Error("There's no user with that username.");
    const result = await bcryptjs.compare(password, user.passwordHash);
    if (!result) throw new Error("Wrong password.");
    req.session.user = user._id;
    res.json({ user , message: "user successfully signed in" });
  } catch (error) {
    next(error);
  }
});

router.post("/edit", async (req, res, next) => {
  const { username, password, course } = req.body;
  try {
    const user = await User.findOneAndUpdate({username}, { username, password, course }).exec();
    if (!user) throw new Error("There's no user with that username.");
    res.json({ user , message: "user successfully updated" });
  } catch (error) {
    next(error);
  }
});

router.post("/sign-out", (req, res, next) => {
  req.session.destroy();
  res.json({});
});

const multerMiddleware = require('./../middleware/multer-configuration');

router.post('/upload', multerMiddleware.single('image'), async (req, res, next) => {
  const { username, image } = req.body;
  try {
    const updatedUserImg = await User.findOneAndUpdate({username}, { image }).exec();
    res.json({ updatedUserImg, message: "user successfully updated" });
  } catch (error) {
    next(error);
  }
});

const routeGuard = require('./../middleware/route-guard');

router.get('/loggedin', routeGuard, async (req, res, next) => {
  const userId = req.session.user;
  if (!userId) {
    res.json({});
  } else {
    try {
      const user = await User.findById(userId);
      if (!user) throw new User('Signed in user not found');
      res.json({ user, message: "user in session" });
    } catch (error) {
      next(error);
    }
  }
});

router.post('/sign-out', (req, res, next) => {
  req.session.destroy();
  // res.redirect('/');
  res.json({});
});

module.exports = router;
