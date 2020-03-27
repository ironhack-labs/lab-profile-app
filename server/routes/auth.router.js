const express = require('express');
const router = express.Router();
const passport = require('passport');
const { hashPassword } = require('../lib/hashing');
const User = require('../models/User');
const uploader = require('../config/cloudinary/cloudinary.config');

// POST route - create new user
router.post('/signup', async (req, res, next) => {
  const { username, password, campus, course } = req.body;
  try {
    const registeredUser = await User.findOne({ username });
    if (registeredUser) {
      console.log(`User ${username} already exists`);
      return res.status(400).json({ message: 'Username already taken' });
    }

    const newUser = await User.create({
      username,
      password: hashPassword(password),
      campus,
      course
    });

    // login after signup
    req.login(newUser, error => {
      if (!error) {
        console.log('Created user and logged', newUser);
        return res.status(201).json({
          message: 'User registered successfully',
          user: newUser
        });
      } else {
        console.log(`Something went wrong while login: ${error}`);
        return res.status(500).json({
          message: 'Login after signup failed'
        });
      }
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errors = error.errors;
      const message = errors.campus
        ? errors.campus.message
        : errors.course.message;
      const formatMessage = message.replace(' enum', '').replace(' path', '');

      console.log('validation error: ', formatMessage);
      return res.status(400).json({
        message: formatMessage
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
    console.log(`${req.user.username} just logged out`);
    req.logout();
    return res.status(200).json({ message: 'Log out successfully' });
  }

  return res.json({ message: 'Cannot logout if not authenticated' });
});

// GET route - loggedin = retrieve logged user
router.get('/loggedin', (req, res, next) => {
  if (req.isAuthenticated()) {
    console.log(req.user.username, ' is logged');
    return res.status(200).json({ user: req.user });
  }

  return res.status(403).json({ message: 'Unauthorized to do that' });
});

// PUT route -  upload = create user image
router.put('/upload', uploader.single('image'), async (req, res, next) => {
  const { file } = req;
  console.log('Uploading', file);

  if (!file) {
    return next(new Error('No file uploaded!'));
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      {
        image: file.secure_url
      },
      { new: true }
    );
    console.log('User image uploaded ', updatedUser);
    return res.status(200).json({
      message: 'File successfully uploaded',
      image: file.secure_url
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
        username: username,
        campus: campus,
        course: course
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
