const express = require('express');
const router  = express.Router();
const passport = require("passport");
const User = require("../models/user");
const { hashPassword } = require("../lib/hashing");

// Signup
router.post('/auth/signup', async (req, res, next) => {
  try {
    const { username, password, campus, course} = req.body;
    console.log("Datos que lllegan " + username, password, campus, course);
    const registeredUser = await User.findOne({ username })

    if (registeredUser) {
      console.log(`User ${registeredUser.username} already exists`);
      res.json(`Error ${username} already exists`);
    } else {
      const newUser = await User.create({
        username,
        campus,
        course,
        password: hashPassword(password)
      });
      res.json(`User created ${username} ${password} ${campus} ${course}`);
    }
    
  } catch (error) {
    console.log(error);
    res.json(`Error ${error} creating user`);
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
