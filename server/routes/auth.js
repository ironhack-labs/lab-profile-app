const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
const parser = require("../configs/cloudinary")

// Bcrypt to encrypt passwords

const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user) => {
    if (err) {
      res.status(500).json({ message: 'Something went wrong authenticating user' });
      return;
    }

    // save user in session
    req.login(user, (err) => {
      if (err) {
        res.status(500).json({ message: 'Session save went bad.' });
        return;
      }

      // We are now logged in (that's why we can also send req.user)
      res.status(200).json(user);
    });
  })(req, res, next);
});

router.post("/signup", (req, res, next) => {
  const { username, password, campus, course } = req.body
  if (username === "" || password === "") {
    res.status(500).json({ message: "Indicate username and password" });
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.status(500).json({ message: "The username already exists" });
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
        res.status(400).json({ message: 'Saving user to database went wrong.' });
        return;
      }
      req.login(newUser, (err) => {
        if (err) {
          res.status(500).json({ message: 'Login after signup went bad.' });
          return;
        }
        res.status(200).json(newUser);
      })
    })
  });
});

router.post("/upload", parser.single("image"), (req, res, next) => {
  User.findOneAndUpdate({},
    { image: req.file.url })
    .then(() => {
      res.status(200).json({
        success: true,
        image: req.file.url
      })
    })
})

router.post('/edit', (req, res) => {

  User.findByIdAndUpdate(req.user.id, {
    username: req.body.username,
    campus: req.body.campus,
    course: req.body.course
  }, { new: true })
  .then((user) => {
      res.status(200).json(user);
    });
  // for (key in update) {
  //   if (update[key] == '') {
  //     delete update[key]
  //   }
  // }
    
});

router.get("/logout", (req, res, next) => {
  req.logout();
  res.status(200).json({ message: 'Log out success!' });
})

router.get('/loggedin', (req, res, next) => {
  // req.isAuthenticated() is defined by passport
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }
  res.status(403).json({ message: 'Unauthorized' });
});
module.exports = router;
