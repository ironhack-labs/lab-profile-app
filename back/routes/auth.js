const express = require("express");
const UserModel = require("../models/User.model");
const passport = require("passport");
const _ = require("lodash");
const router = express.Router();

// REGISTER A USER
router.post("/signup", async (req, res, next) => {
  const { username, password } = req.body;
  // Create the user
  const newUser = await User.create({ username, password });

  // Directly login user
  req.logIn(newUser, err => {
    res.json(
      _.pick(req.user, [
        "username",
        "password",
        "campus",
        "course",
        "_id",
        "createdAt",
        "updatedAt"
      ])
    );
  });
});

// LOGIN
router.post("/login", passport.authenticate("local"), (req, res) => {
  // Return the logged in user
  return res.json(
    _.pick(req.user, ["username", "password", "_id", "createdAt", "updatedAt"])
  );
});

router.post("/edit", passport.authenticate("local"), (req, res) => {
  //Return User updated
  return res.json(
    _.pick(req.user, [
      "username",
      "campus",
      "course",
      "_id",
      "createdAt",
      "updatedAt"
    ])
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
//LOGGEDIN
router.get("/loggedin", (req, res, next) => {
  if (req.user) {
    req.logout();
    return res.json({ status: "User logged" });
  }
});

// WHOAMI
router.get("/whoami", (req, res, next) => {
  if (req.user) return res.json(req.user);
  else return res.status(401).json({ status: "No user session present" });
});

module.exports = router;
