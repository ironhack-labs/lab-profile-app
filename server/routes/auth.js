const express = require('express');
const router  = express.Router();
const passport = require("passport");
const _ = require("lodash");
const User = require("../models/user");
const { hashPassword } = require("../lib/hashing");

// Signup
router.post('/auth/signup', async (req, res, next) => {
  try {
    const { username, password, campus, course} = req.body;
    console.log("Datos que lllegan " + username, password, campus, course);

    if(!username || !password){
      res.status(400).json({error: 'Provide username and password'});
    }

    const registeredUser = await User.findOne({ username })

    if (registeredUser) {
      console.log(`User ${registeredUser.username} already exists`);
      res.status(400).json({error: 'User already exists'});
    } else {
      const newUser = await User.create({
        username,
        campus,
        course,
        password: hashPassword(password)
      });
      
      // Directly login user
      req.logIn(newUser, err => {
        if(err) res.status(500).json({error: 'Error login after signup'});
        res.json(_.pick(req.user, ["username", "course", "campus"]));
      });
    }
    
  } catch (error) {
    console.log(error);
    res.status(500).json({error: 'Error creating user'});
  }
});

// Login user
router.post("/auth/login", passport.authenticate("local"), (req, res) => {
  return res.json(
    _.pick(req.user, ["username", "course", "campus"])
  );
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
  if (req.user) {
    req.logout();
    return res.status(200).json({ message: "Log out success" });
  } else {
    return res
      .status(401)
      .json({ status: "You have to be logged in to logout" });
  }
});

// Logedin
router.get('/auth/loggedin', (req, res, next) => {

  if(req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }
  res.status(403).json({error:'Unauthorized'});
});

module.exports = router;
