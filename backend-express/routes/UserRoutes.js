const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
//sign up
router.post("/signup", async (req, res, next) => {
  try {
    const { body } = req;
    const salt = bcrypt.genSaltSync(10);
    const password = bcrypt.hashSync(body.newPassword, salt);
    const username = body.newUsername;
    const campus = body.newCampus;
    const course = body.newCourse;
    const result = await User.create({
      username,
      password,
      campus,
      course
    });
    res.json({ message: "success", user: result });
  } catch (err) {
    next(err);
  }
});
//login
router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      res.json({
        message: "username not found,please check and try again!",
        code: 1
      });
      return;
    }
    const isAuthenticated = bcrypt.compareSync(password, user.password || "");
    if (!isAuthenticated) {
      return res.json({
        errorMessage: "incorrect password, please try again",
        code: 1
      });
    }
    req.session.currentUser = user;
  } catch (err) {
    next(err);
  }
});

//update user

router.post("/update", async (req, res, next) => {
  try {
    const id = req.currentUser._id;
    let update = { ...req.body };
    await User.findByIdAndUpdate(id, update, { new: true });
    res.json({ message: "Success!" });
  } catch (err) {
    next(err);
  }
});

//upload picture
router.post("/upload", async (req, res, next) => {
  try {
    const id = req.currentUser._id;
    let newPic = { ...req.body };
    await User.findByIdAndUpdate(id, newPic, { new: true });
    res.json({ message: "Success!" });
  } catch (err) {
    next(err);
  }
});

//login info
router.get("/get-user-info", async (req, res, _) => {
  if (req.session.currentUser) {
    res.json(req.session.currentUser);
  } else {
    res.json(null);
  }
});

//logout
router.post("/logout", async (req, res) => {
  await req.session.destroy();
  res.json({ message: "success" });
});

module.exports = router;
