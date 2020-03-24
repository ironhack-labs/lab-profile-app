const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/User');

// POST route - create new user
router.post('/signup', async (req, res, next) => {
  const { username, password, campus, course } = req.body;
  try {
    const newUser = await User.create({ username, password, campus, course });
    console.log('Created user ', newUser);
    return res.status(201).json({
      status: 201,
      message: 'User registered successfully '
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      console.log('Validation error ', error);
      return res.status(400).json({
        status: 400,
        message: error.message
      });
    } else {
      console.log('Error occurred during signup', error);
      return res.status(500).json({
        status: 500,
        message: 'Signup failed'
      });
    }
  }
});

// POST route - create logged user
router.post('/login', async (req, res, next) => {});

module.exports = router;
