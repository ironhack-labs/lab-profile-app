const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcryptjs');
const uploadCloud = require('../configs/cloudinary.config');
const User = require('../models/User.model');

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, failureDetails) => {
    if (err) {
      res
        .status(500)
        .json({ message: 'Something went wrong authenticating user' });
      return;
    }
    if (!theUser) {
      res.status(401).json(failureDetails);
      return;
    }

    req.login(user, (err) => {
      if (err) {
        res.status(500).json({ message: 'Session save went bad.' });
        return;
      }
      //res.status(200).json(user);
      res.status(200).json({ message: 'User logged' });
    });
  })(req, res, next);
});

router.post('/signup', (req, res, next) => {
  const { username, password, campus, course } = req.body;
  if (!username || !password) {
    res.status(400).json({ message: 'Provide username and password' });
    return;
  }
  if (password.length < 7) {
    res.status(400).json({
      message:
        'Please make your password at least 8 characters long for security purposes.',
    });
    return;
  }
  User.findOne({ username }, (err, foundUser) => {
    if (err) {
      res.status(500).json({ message: 'Username check went bad.' });
      return;
    }
    if (foundUser) {
      res.status(400).json({ message: 'Username taken. Choose another one.' });
      return;
    }
    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);
    const newUser = new User({
      username,
      password: hashPass,
      campus,
      course,
    });
    newUser.save((err) => {
      if (err) {
        res
          .status(400)
          .json({ message: 'Saving user to database went wrong.' });
        return;
      }
      req.login(newUser, (err) => {
        if (err) {
          res.status(500).json({ message: 'Login after signup went bad.' });
          return;
        }
        //res.status(200).json(newUser);
        res.status(200).json({ message: 'User created' });
      });
    });
  });
});

router.post('/upload', uploadCloud.single('file'), (req, res, next) => {
  const image = req.file.path;
  if (req.user) {
    const editUser = User.findByIdAndUpdate(
      req.user._id,
      { image },
      {
        new: true,
      }
    );
    res.status(200).json({ message: 'User updated' });
  } else {
    res.status(500).json({ message: 'Problem saving user image.' });
    return;
  }
});
router.post('/edit', (req, res, next) => {
  const { username, campus, course } = req.body;
  if (req.user) {
    const editUser = User.findByIdAndUpdate(
      req.user._id,
      { username, campus, course },
      {
        new: true,
      }
    );
    res.status(200).json({ message: 'User updated' });
  } else {
    res.status(500).json({ message: 'Problem saving user.' });
    return;
  }
});
router.post('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ message: 'Ok Message' });
});

router.post('/loggedin', (req, res, next) => {
  if (req.isAuthenticated()) {
    // res.status(200).json(req.user);
    res.status(200).json({ message: 'User logged' });
    return;
  }
  res.status(403).json({ message: 'Unauthorized' });
});

module.exports = router;
