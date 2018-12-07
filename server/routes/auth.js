const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


// router.get("/login", (req, res, next) => {
//   res.status(500).json({"message":"error" });
// });

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.status(500).json({message : "User needs to log in"})}
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.status(200).json(user);
    });
  })(req, res, next);
});

// router.get("/signup", (req, res, next) => {
//   res.status(500).json("auth/signup");
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
      res.status(500).json({message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass
    });

    newUser.save()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500)({ message: "Something went wrong" });
    })
  });
});

router.post('/logout', (req, res, next) => {
  // req.logout() is defined by passport
  req.logout();
  res.status(200).json({ message: 'Log out success!' });
});


router.get('/loggedin', (req, res, next) => {
  // req.isAuthenticated() is defined by passport
  if (req.isAuthenticated()) {
      res.status(200).json(req.user);
      return;
  }
  res.status(403).json({ message: 'Unauthorized' });
});

router.post("/edit", (req, res, next) => {
  // console.log("Entrando en edit")
  let { username, campus, course } = req.body;
  User.findByIdAndUpdate(req.user._id, {username, campus, course}, {new: true})
    .then((userUpdated) => {
      res.status(200).json({userUpdated});
    })
    .catch(err => console.log(err));
});


module.exports = router;
