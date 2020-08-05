const express = require('express');
const authRoutes = express.Router();

const passport = require('passport');
const bcrypt = require('bcryptjs');

const User = require('../models/User.model');

authRoutes.post('/signup', (req, res, next) => {
  const { username, password, campus, course, image } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Provide username and password' });
  }
  if (password.length < 7) {
    return res.status(400).json({
      message: 'Provide a stronger password of at least 8 characters',
    });
  }
  User.findOne({ username }, (err, foundUser) => {
    if (err) {
      return res.status(500).json({ message: 'Username check went bad' });
    }
    if (foundUser) {
      return res
        .status(400)
        .json({ message: 'Username taken. Choose another one' });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username: username,
      password: hashPass,
      campus: campus,
      course: course,
    });

    newUser.save((err) => {
      if (err) {
        return res
          .status(400)
          .json({ message: 'Saving user to the database went wrong.' });
      }
      req.login(newUser, (err) => {
        if (err) {
          return res
            .status(500)
            .json({ message: 'Login after signup went bad' });
        }
        res.status(200).json(newUser);
      });
    });
  });
});

authRoutes.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if (err) {
      return res.status(500).json({ message: 'Something went wrong' });
    }
    if (!theUser) {
      return res.status(401).json(failureDetails);
    }
    req.login(theUser, (err) => {
      if (err) {
        return res.status(500).json({ message: 'Session save went bad' });
      }
      res.status(200).json(theUser);
    });
  })(req, res, next);
});

authRoutes.post('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ message: 'Log out success!' });
});

authRoutes.get('/loggedin', (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.status(200).json(req.user);
  }
  res.status(403).json({ message: 'Unauthorized' });
});

module.exports = authRoutes;
