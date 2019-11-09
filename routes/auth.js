var express = require("express");
var router = express.Router();

const passport = require("passport");
const bcrypt = require("bcryptjs");

const User = require("../models/user");

// /api/auth/checkuser
router.get("/checkuser", (req, res, next) => {
  if (req.user) {
    res.json({ userDoc: req.user });
  } else {
    res.json({ userDoc: null });
  }
});

// /api/auth/signup
router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    res.status(400).json({ message: "Provide username and password" });
    return;
  }

  if (password.length < 7) {
    res
      .status(400)
      .json({
        message:
          "Please make your password at least 8 characters long for security reasons."
      });
    return;
  }

  User.findOne({ username }).then(foundUser => {
    if (foundUser) {
      res.status(400).json({ message: "Username taken. Choose another one." });
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const aNewUser = new User({
      username: username,
      password: hashPass
    });

    aNewUser.save().then(newUser => {
      req.login(newUser, err => {
        res.status(200).json({ username: newUser.username, _id: newUser._id });
      });
    });
  });
});

module.exports = router;
