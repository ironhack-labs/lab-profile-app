const express = require("express");
const router = express.Router();
const Users = require("../models/User");
const _ = require("lodash");
const passport = require("passport");
const ensureLogin = require("connect-ensure-login");
const { hashPassword, checkHashed } = require("../lib/hashing");
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");

// SIGNUP
router.post("/signup", async (req, res, next) => {
  const { username, password, campus, course, image } = req.body;

  // Create the user
  const existingUser = await Users.findOne({ username });
  if (!existingUser) {
    const newUser = await Users.create({
      username,
      password: hashPassword(password),
      campus,
      course,
      image
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
    return res
      .status(401)
      .json({ status: "You have to be logged in to logout" });
  }
});

/* EDIT */
router.post("/edit", isLoggedIn(), async (req, res, next) => {
  try {
    const id = req.user._id;
    const { username, campus, course } = req.body;
    await Users.findByIdAndUpdate(id, {
      username,
      campus,
      course
    });
    return res.json({ status: "Edit Profile" });
  } catch (error) {
    return res.status(401).json({ status: "Not Found" });
  }
});

// WHOAMI
router.get("/whoami", (req, res, next) => {
  if (req.user) return res.json(req.user);
  else return res.status(401).json({ status: "No user session present" });
});

// UPLOAD
router.post("/upload", async (req, res, next) => {
  const { username, campus, image, password, course } = req.body;
  const loggedUser = req.user;
  try {
    const existingUser = await User.findOne({ username });

    // Update user in database
    if (!existingUser) {
      loggedUser.username = username;
      loggedUser.campus = campus;
      loggedUser.image = image;
      loggedUser.password = password;
      loggedUser.course = course;

      await loggedUser.save();
      req.flash("error", "Updated user!");
      return res.status("Update");
    } else {
      if (loggedUser.username === existingUser.username) {
        loggedUser.campus = campus;
        loggedUser.image = image;
        loggedUser.password = password;
        loggedUser.course = course;
        await loggedUser.save();
        req.flash("error", "Updated user!");
        return res.status("Update user");
      } else {
        req.flash("error", "That username is taken!");
        return res.status("no Update");
      }
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
