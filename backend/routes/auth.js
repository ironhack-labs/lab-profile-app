const express = require("express");
const UserModel = require("../models/User.model");
const passport = require("passport");
const _ = require("lodash");
const router = express.Router();

// REGISTER A USER
router.post("/signup", async (req, res, next) => {
  const { username, password } = req.body;
  // Create the user
  const newUser = await UserModel.create({ username, password });

  // Directly login user
  req.logIn(newUser, err => {
    res.json(_.pick(req.user, ["username", "_id", "createdAt", "updatedAt"]));
  });
});

// LOGIN
router.post("/login", passport.authenticate("local"), (req, res) => {
  // Return the logged in user
  return res.json(
    _.pick(req.user, ["username", "_id", "createdAt", "updatedAt"])
  );
});

// LOGOUT
router.get("/logout", (req, res, next) => {
  if (req.user) {
    req.logout();
    return res.json({ status: "Log out" });
  } else {
    return res
      .status(401)
      .json({ status: "You have to be logged in to logout" });
  }
});

// WHOAMI
router.get("/whoami", (req, res, next) => {
  if (req.user) return res.json(req.user);
  else return res.status(401).json({ status: "No user session present" });
});

module.exports = router;
