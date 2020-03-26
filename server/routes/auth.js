const express = require('express');
const router  = express.Router();

// Signup
router.post('/auth/signup', async (req, res, next) => {
  try {
    const { username, password, campus, course} = req.body;
    res.json(`User created ${username} ${password} ${campus} ${course}`);
  } catch (error) {
    console.log(error);
  }
});

// Login
router.post('/auth/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    res.json(`User logged ${username} ${password}`);
  } catch (error) {
    console.log(error);
  }
});

// Upload file
router.post('/auth/upload', async (req, res, next) => {
  try {
    const { file } = req.body;
    res.json(`User updated ${file}`);
  } catch (error) {
    console.log(error);
  }
});

// Edit user
router.post('/auth/edit', async (req, res, next) => {
  try {
    const {username, campus, course } = req.body;
    res.json(`User updated ${username} ${campus} ${course}`);
  } catch (error) {
    console.log(error);
  }
});

// Logout
router.post('/auth/logout', async (req, res, next) => {
  try {
    res.json(`OK Message`);
  } catch (error) {
    console.log(error);
  }
});

// Logout
router.get('/auth/loggedin', async (req, res, next) => {
  try {
    res.json(`User logged`);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
