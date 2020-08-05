const express = require('express');
const authRoutes = express.Router();
const passport = require('passport');
const bcrypt = require('bcryptjs');
const User = require('../models/user-model');

const uploader = require('../configs/cloudinary');

// Login Route
authRoutes.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
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
    req.login(theUser, (err) => {
      if (err) {
        res.status(500).json({ message: 'Session save went bad.' });
        return;
      }
      res.status(200).json(`User logged: ${theUser}`);
    });
  })(req, res, next);
});

// Signup Route
authRoutes.post('/signup', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const campus = req.body.campus;
  const course = req.body.course;

  if (!username || !password) {
    res.status(400).json({ message: 'Please provide username and password' });
    return;
  }

  if (!campus || !course) {
    res.status(400).json({ message: 'Please provide the campus and course' });
  }

  if (password.length < 7) {
    res.status(400).json({
      message:
        'Please make your password at least 8 characters long for security purposes.',
    });
    return;
  }

  User.findOne(
    {
      username,
    },
    (err, foundUser) => {
      if (err) {
        res.status(500).json({ message: 'Username check went bad.' });
        return;
      }

      if (foundUser) {
        res
          .status(400)
          .json({ message: 'Username taken. Choose another one.' });
        return;
      }

      const salt = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(password, salt);
      const aNewUser = new User({
        username: username,
        password: hashPass,
        campus: campus,
        course: course,
        image: '',
      });
      aNewUser.save((err) => {
        if (err) {
          res
            .status(400)
            .json({ message: 'Saving user to database went wrong.' });
          return;
        }
        req.login(aNewUser, (err) => {
          if (err) {
            res.status(500).json({ message: 'Login after signup went bad.' });
            return;
          }
          res.status(200).json(`User created: ${aNewUser}`);
        });
      });
    }
  );
});

// Upload Route
authRoutes.put('/upload', uploader.single('image'), (req, res, next) => {
  if (!req.file) {
    next(new Error('No file uploaded!'));
    return;
  }

  const data = {
    currentUser: req.session.passport.user,
    image: req.file.path,
  };

  User.findOneAndUpdate(
    {
      _id: data.currentUser,
    },
    {
      image: data.image,
    },
    { new: true }
  )
    .then((newImage) => {
      res.status(200).json(`User updated: ${newImage}`);
    })
    .catch((err) => next(err));
});

// Edit Route
authRoutes.put('/edit', (req, res, next) => {
  const username = req.body.username;
  const campus = req.body.campus;
  const course = req.body.course;
  const currentUser = req.session.passport.user;

  User.findOneAndUpdate(
    {
      _id: currentUser,
    },
    {
      username: username,
      campus: campus,
      course: course,
    },
    { new: true }
  )
    .then((newData) => {
      res.status(200).json(`User updated: ${newData}`);
    })
    .catch((err) => next(err));
});

// Logout Route
authRoutes.post('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ message: 'Log out success!' });
});

// Loggedin Route
authRoutes.get('/loggedin', (req, res, next) => {
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }
  res.status(403).json({ message: 'Unauthorized' });
});

module.exports = authRoutes;
