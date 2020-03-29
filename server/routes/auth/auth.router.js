const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const _ = require("lodash");
const passport = require("passport");
const { isLoggedIn, isLoggedOut } = require("../../middleware/isLogged");
const { hashPassword } = require("../../middleware/hashing");
const dataValidation = require("../../middleware/dataValidation");

router.post("/signup", isLoggedOut(), dataValidation(), async (req, res) => {
  console.log("SIGNUP");
  const { username, password, campus, course } = req.body;
  const existingUser = await User.findOne({ username });

  if (existingUser) {
    res.status(401).json({ status: "User already exists" });
  } else {
    const newUser = await User.create({ username, password: hashPassword(password), campus, course });

    req.logIn(newUser, () => {
      console.log("SIGNUP LOGIN USER", req.user);
      res.json(_.pick(req.user, ["username", "campus", "course"]));
    });
  }
});

router.post("/login", passport.authenticate("local"), async (req, res) => {
  console.log("LOGIN USER", req.user);
  res.json({ status: `Welcome back ${req.user.username}` });
});

router.post("/upload", isLoggedIn(), async (req, res) => {
  res.json({ status: "Upload" });
});

router.post("/edit", isLoggedIn(), async (req, res) => {
  res.json({ status: "Edit" });
});

router.post("/logout", isLoggedIn(), async (req, res) => {
  req.logOut();
  res.json({ status: "You are logged out" });
});

router.get("/loggedin", isLoggedIn(), async (req, res) => {
  res.json({ status: `${req.user.username} you are logged in` });
});

module.exports = router;
