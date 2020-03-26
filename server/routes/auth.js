const express = require("express");
const Users = require("../models/Users");
const passport = require("passport");
const _ = require("lodash");
const router = express.Router();
const { hashPassword, checkHashed } = require("../lib/hashing");
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");

// REGISTER A USER
router.post("/signup", async (req, res, next) => {
  const { username, password, campus, course, image } = req.body;

  console.log(username, password, campus, course, image);
  // Create the user
  const newUser = await Users.create({
    username,
    password: hashPassword(password),
    campus,
    course,
    image
  });
  // res.json({ status: "LOGUEADO premoh!" });

  // Directly login user
  req.logIn(newUser, err => {
    res.json(_.pick(req.user, ["username", "_id", "createdAt", "updatedAt"]));
  });
});

// LOGIN
router.post(
  "/login",
  isLoggedOut(),
  passport.authenticate("local"),
  (req, res) => {
    // Return the logged in user
    return res.json(
      _.pick(req.user, ["username", "_id", "createdAt", "updatedAt"])
    );
  }
);

// LOGOUT
router.get("/logout", isLoggedIn(), (req, res, next) => {
  if (req.user) {
    req.logout();
    return res.json({ status: "Log out" });
  } else {
    return res
      .status(401)
      .json({ status: "You have to be logged in to logout" });
  }
});

/* EDIT */
router.post("/edit", isLoggedIn(), async (req, res, next) => {
  try {
    const id = req.user._id;
    const { username, campus, course, image } = req.body;
    await Users.findByIdAndUpdate(id, {
      username,
      campus,
      course,
      image
    });
    return res.json({ status: "Edited Profile" });
  } catch (error) {
    return res.status(401).json({ status: "Not Found" });
  }
});

// WHOAMI
router.get("/whoami", (req, res, next) => {
  if (req.user) return res.json(req.user);
  else return res.status(401).json({ status: "No user session present" });
});

module.exports = router;
