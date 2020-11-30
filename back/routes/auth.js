const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


router.post("/login", (req, res, next) => {
  passport.authenticate('local', (err, user, failureDetails) => {
    if (err) {
      return res.status(500).json({ message: 'Something went wrong authenticating user' })
    }
    if (!user) {
      return res.status(401).json(failureDetails)
    }

    req.login(user, err => {
      if (err) {
        return res.status(500).json({ message: 'Something went wrong authenticating user' })
      }
      user.password = null
      res.status(200).json(user)
    })
  })(req, res, next)
})

router.post("/signup", (req, res, next) => {
  const { username, password, campus, course } = req.body
  if (username === "" || password === "") {
    res.status(400).json({ message: "Indicate username and password" });
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.status(400).json({ message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = User.create({
      username,
      password: hashPass,
      campus,
      course
    })

    // newUser.save()
    .then(() => {
      res.status(200).json({message: "User created"});
    })
    .catch(err => {
      res.status(500).json({ message: "Something went wrong" });
    })
  });
});

router.post("/upload", (req, res) => {
  const image = req.file.path 
  
})

router.post("/edit/:id", (req, res) => {
  const id = req.params.id
  const {username, campus, course} = req.body
  User.findByIdAndUpdate(id, {username, campus, course})
  .then(() => {
    res.status(200).json({message: "User updated"})
  })
  .catch(err => {
    res.status(500).json({message: "Something went wrong"})
  })
})

router.get("/loggedin", (req, res) => {
  res.status(200).json(req.user || null)
})

router.post("/logout", (req, res) => {
  !req.user ? res.status(400).json({message: "You are not logged in anyway"}) :
  req.logout();
  res.status(200).json({message: "Logged out"});
});

module.exports = router;
