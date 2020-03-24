const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/User');

// POST route - create new user
router.post('/signup', async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const newUser = await User.create({ username, password });
    console.log('Created user ', newUser);
    return res.status(201).json({
      status: 201,
      message: 'User registered successfully '
    });
  } catch (error) {
    console.log('Error occurred during signup', error);
    res.status(500).json({
      status: 500,
      message: 'Signup failed'
    });
  }
});

module.exports = router;
