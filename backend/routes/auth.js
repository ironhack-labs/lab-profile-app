const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User");
// const uploadCloud = require('../config/cloudinary')

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.post(
  "/login",
  passport.authenticate("local", {
    failureFlash: true,
    passReqToCallback: true,
  }),
  (req, res) => {
    res.status(200).json({ user: req.user });
  }
);

router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username === "" || password === "") {
    res.json({ message: "Indicate username and password" });
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.json({ message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass,
    });

    newUser
      .save()
      .then(({ user: { username, _id } }) => {
        res.status("201").json({ username, _id });
      })
      .catch((err) => {
        res.json({ message: "Something went wrong" });
      });
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.status(200).json({ message: "logged out" });
});

router.post('/edit', (req, res) => {
  const {id, username, course, campus, password} = req.body
  const editUser = {username, course, campus}
  User.findByIdAndUpdate({_id: id}, editUser, {new: true})
  .then( user => res.status(200).json({user}))
  .catch( err => res.status(500).json({err}))
})

function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
}

router.get('/loggedin', isAuth, (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(500).json({ err }));
});

module.exports = router;