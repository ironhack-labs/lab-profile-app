const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

//LOGIN

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if (err) {
      res.status(500).json({ message: 'Something went wrong authenticating user' });
      return;
    }

    if (!theUser) {
      res.status(401).json(failureDetails);
      return;
    }
    req.login(theUser, (err) => {
      if (err) {
        res.status(500).json({ message: 'Session save went bad.' });
        return;
      }
      res.status(200).json(theUser)
    })
  })(req, res, next)
})

//SIGNUP

router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const campus = req.body.campus;
  const course = req.body.course;
  //const image = req.body.image;

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

    const newUser = new User({
      username,
      password: hashPass,
      campus,
      course
    });

    newUser.save(err => {
      if (err) {
        res.status(400).json({ message: 'Oops. Something went wrong.' })
        return;
      }
      req.login(newUser, (err) => {
        if (err) {
          res.status(500).json({ message: 'Oops. Something went wrong when trying to log you in.' })
          return;
        }
        res.status(200).json(newUser)
      })
    })
  });
});

//LOGOUT

router.post("/logout", (req, res) => {
  req.logout();
  res.status(200).json({ message: 'You are logged out now' })
});

//LOGGED IN??

router.get('/loggedin', (req, res, next) => {
  if (req.isAuthenticated()) {
    res.status(200).json(req.user)
    return;
  }
  res.status(403).json({ message: 'unauthorized' })
})

module.exports = router;
