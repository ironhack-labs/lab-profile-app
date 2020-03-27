const express = require("express");
const router = express.Router();

const User = require("../models/User");

const _ = require("lodash");

const passport = require("passport");
const { hashPassword } = require("../lib/hashing");
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");

// SIGNUP
router.post("/signup", isLoggedOut(), async (req, res, next) => {
  const { username, password, campus, course } = req.body;

  // Create the user
  const existingUser = await User.findOne({ username });
  if (!existingUser) {
    const newUser = await User.create({
      username,
      password: hashPassword(password),
      campus,
      course
    });
    // Directly login user
    req.logIn(newUser, err => {
      res.json(_.pick(req.user, ["username", "_id", "createdAt", "updatedAt"]));
    });
  } else {
    res.json({ status: "User Exist" });
  }
});

// LOGIN
router.post(
  "/login",
  isLoggedOut(),
  passport.authenticate("local"),
  (req, res) => {
    // Directly login user
    return res.json(
      _.pick(req.user, ["username", "_id", "createdAt", "updatedAt"])
    );
  }
);

// LOGOUT
router.post("/logout", isLoggedIn(), async (req, res, next) => {
  if (req.user) {
    req.logout();
    return res.json({ status: "Log out" });
  } else {
    return res.json({ status: "You have to be logged in to logout" });
  }
});

// LOGGEDIN
router.get("/loggedin", isLoggedIn(), async (req, res) => {
  if (req.user) return res.json(req.user);
  else return res.status(401).json({ status: "No user session present" });
});

module.exports = router;
