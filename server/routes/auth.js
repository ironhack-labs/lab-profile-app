const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


router.post("/login", function (req, res, next){
  passport.authenticate('local', function(err, user, info) {
  if (err) { res.status(400).json({ message: "Something went wrong"});return; }
  if (!user) { res.status(400).json ({message: "The username don't exists"}); return; }
  req.logIn(user, function(err) {
    if (err) { res.status(400).json({message: "Something went wrong"}); return; }
    return res.json(user);
  });
})(req, res, next)
});


router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username === "" || password === "") {
    res.status(400).json( { message: "Indicate username and password" });
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.status(400).json( { message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass
    });

    newUser.save()
    .then(user => {
      res.json(user)
    })
    .catch(err => {
      res.status(500).json({ message: "Something went wrong" });
    })
  });
});



router.get('/loggedin', (req, res, next) => {
  // req.isAuthenticated() is defined by passport
  if (req.isAuthenticated()) {
      res.status(200).json(req.user);
      return;
  }
  res.status(403).json({ message: 'Unauthorized' });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.json({message: "Logged out succesfully"});
});



module.exports = router;
