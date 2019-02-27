const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    // Check for errors
    if (err) {
      res.status(500).json({ message: "something went bad" })
      return
    }
    if (!theUser) {
      res.status(500).json({ failureDetails })
      return
    }

    // Return user and logged in
    req.login(theUser, err => {
      if (err) {
        res.status(500).json({ message: "login proccess went bad" })
        return
      }
      res.status(200).json(theUser)
      return


    })
  })(req, res, next);

})

router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const campus = req.body.campus;
  const course = req.body.course;
  if (username === "" || password === "") {
    res.status(400).json({ message: "Please provide an username and password" })
    return;
  }

  User.findOne({ username })
    .then(foundUser => {
      if (foundUser !== null) {
        res.status(400).json({ message: "The username already exists" });
        return;
      }

      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);

      const newUser = new User({
        username,
        password: hashPass,
        campus,
        course
      });

      newUser.save()
        .then(savedUser => req.login(savedUser, err => {
          if (err) {
            res.status(500).json({ message: "login went wrong" })
          }

          res.status(200).json(savedUser)
        }))

    })
})

router.put("/edit/:id", (req, res, next) => {
  const { username, campus, course } = req.body

  User.findByIdAndUpdate(req.params.id, {
    username,
    campus,
    course
  }).then(user => res.status(200).json(user))
})

router.get("/logout", (req, res) => {
  req.logout();
  res.status(200).json({ message: "logged out" })
});

router.post("/upload", (req, res, next) => {

})

router.get("/loggedin", (req, res, next) => {
  if (req.isAuthenticated()) {
    res.status(200).json(req.user)
    return
  }

  res.status(403).json({ message: "Unauthorized" })
})



module.exports = router;
