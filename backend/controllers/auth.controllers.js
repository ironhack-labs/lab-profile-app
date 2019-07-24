const express = require("express");
const passport = require("passport");
const router = requiere("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, theUser, failureDetails) => {
    if (err) {
      res
        .status(500)
        .json({ message: "Something went wrong authenticating user" });
      return;
    }

    if (!theUser) {
      res.status(401).json(failureDetails);
      return;
    }

    req.login(theUser, err => {
      if (err) {
        res.status(500).json({ message: "Session save went bad." });
        return;
      }

      res.status(200).json(theUser);
    });
  })(req, res, next);
});

router.post("/signup", (req, res) => {
  const { username, password } = req.body;

  if (username === "" || password === "") {
    res.json(500, { message: "Error Fields aren't Filled" });
  } else {
    User.findOne({ username }, "username", (err, user) => {
      if (user !== null) {
        res.json(500, { message: "The username already exists" });
      } else {
        const newUser = {
          username,
          password: bcrypt.hashSync(password, bcrypt.genSaltSync(10))
        };
        newUser
          .save()
          .then(() => res.json(200, { message: "Ok" }))
          .catch(err => {
            res.json(500, { message: err + "Something went wrong" });
          });
      }
    });
  }
});

router.put("/edit", (req, res) => {
  User.findByIdAndUpdate(id, { name, password })
    .then(res.json(200, { message: "User sucessfully updated" }))
    .catch(err => res.json(500, { message: err }));
});

router.get("/logout", (req, res) => {
  req.logout();
  res.json(200, { message: "Ok" });
});

router.get("/loggedin", (req, res, next) => {
  if (req.user) {
    res.json(200, req.user);
  } else {
    res.json(500, { message: "Not Logged in" });
  }
});
