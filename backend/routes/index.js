const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("passport");
const uploadCloud = require("../helpers/cloudinary");

//Middle wares

function isAuth(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).json({ message: "You haven't logged in yet." });
  }
}

//edit
router.post(
  "/edit",
  isAuth,
  uploadCloud.single("profilePic"),
  (req, res, next) => {
    console.log(req.body);
    console.log(req.file);
    if (req.file) {
      req.body.profilePic = req.file.secure_url;
    }
    User.findByIdAndUpdate(req.user._id, { ...req.body })
      .then(response => {
        res.status(200).json({
          message: "Changes updated sucessfully",
          usere: req.user.profilePic
        });
      })
      .catch(e => console.log(e));
  }
);

//Sign up
router.post("/signup", (req, res, next) => {
  User.register(req.body, req.body.password)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(e => next(e));
});

//Login
router.post("/login", passport.authenticate("local"), (req, res, next) => {
  console.log(req.user);
  res.status(200).json(req.user);
});

//Privates
router.get("/private", isAuth, (req, res, next) => {
  res
    .status(200)
    .json({ message: "Access granted: Clearance 1", user: req.user });
});

//Logout

router.get("/logout", isAuth, (req, res, next) => {
  req.logout();

  req.session.destroy(err => {
    if (!err) {
      res
        .status(200)
        .clearCookie("connect.sid", { path: "/" })
        .json({ message: "Logout successful" });
    }
  });
});

module.exports = router;
