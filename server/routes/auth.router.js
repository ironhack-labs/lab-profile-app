const express = require('express');
const router = express.Router();
const passport = require('passport');
const { hashPassword } = require('../lib/hashing');
const User = require('../models/User');

// POST route - create new user
router.post('/signup', async (req, res, next) => {
  const { username, password, campus, course } = req.body;
  try {
    const newUser = await User.create({
      username,
      password: hashPassword(password),
      campus,
      course
    });
    console.log('Created user ', newUser);
    return res.status(201).json({
      message: 'User registered successfully '
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      console.log('Validation error ', error);
      return res.status(400).json({
        message: error.message
      });
    } else {
      console.log('Error occurred during signup', error);
      return res.status(500).json({
        message: 'Signup failed'
      });
    }
  }
});

// POST route - login = create logged user
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, failureDetails) => {
    if (err) {
      console.log(err);
      return res.json({ status: 500, message: 'Authentication error' });
    }

    if (!user) {
      return res.json({ status: 401, message: failureDetails.message });
    }

    req.login(user, err => {
      if (err) {
        return res.status(500).json({ message: 'Session save went bad.' });
      }

      return res.json({ status: 200, message: 'Logged in successfully', user });
    });
  })(req, res, next);
});

// POST route - logout = remove logged user
router.post('/logout', (req, res, next) => {
  if (req.isAuthenticated()) {
    req.logout();
    return res.status(200).json({ message: 'Log out successfully' });
  }

  return res.json({ message: 'Cannot logout if not authenticated' });
});

// GET route - loggedin = retrieve logged user
router.get('/loggedin', (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.status(200).json({ user: req.user });
  }

  return res.status(403).json({ message: 'Unauthorized to do that' });
});

// PUT route -  upload = create user image
router.put('/upload', async (req, res, next) => {
  const { file } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      {
        image: file
      },
      { new: true }
    );
    console.log('User image uploaded ', updatedUser);
    return res.status(200).json({
      message: 'File successfully uploaded',
      user: updatedUser
    });
  } catch (error) {
    console.log('Error uploading file', error);
    return res.status(500).json({
      message: 'Image upload failed'
    });
  }
});

// PUT route - edit logged user
router.put('/edit', async (req, res, next) => {
  const { username, campus, course } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      {
        username: username || req.user.username,
        campus: campus || req.user.campus,
        course: course || req.user.course
      },
      { new: true }
    );
    console.log('User edited ', updatedUser);

    return res.status(200).json({
      message: 'User successfully edited',
      user: updatedUser
    });
  } catch (error) {
    console.log('Error editing user', error);

    return res.status(500).json({
      message: 'Editing user failed'
    });
  }
});

module.exports = router;
