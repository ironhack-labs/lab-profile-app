const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

// router.get("/login", (req, res, next) => {
//   res.render("auth/login", { message: req.flash("error") });
// });

router.post("/login", function(req, res, next) {
  passport.authenticate("local", function(err, user, info) {
    if (err) {
      return res.status(200).json({ message: "login error" });
    }
    if (!user) {
      return res.status(400).json({ message: "user no exists" });
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      return res.status(200).json(user);
    });
  })(req, res, next);
});

// router.get("/signup", (req, res, next) => {
//   res.render("auth/signup");
// });

router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username === "" || password === "") {
    res.status(500).json({ message: "Indicate username and password" });
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.status(400).json({ message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass
    });

    newUser
      .save()
      .then(user => {
        res.status(200).json(user);
      })
      .catch(err => {
        res.status(400).json({ message: "Something went wrong" });
      });
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.status(200).json({ message: "user logout" });
});

router.get("/loggedin", (req, res, next) => {
  if (req.isAuthenticated()) {
    res.status(200).json({ message: "User loggedin" });
    return;
  }
  res.status(403).json({ message: "Unauthorized" });
});

router.get("/currentuser", (req, res, next) => {
  if (req.user) {
    res.status(200).json(req.user);
  } else {
    next(new Error("Not logged in"));
  }
});

module.exports = router;
