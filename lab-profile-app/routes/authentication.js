'use strict';

const { Router } = require('express');
const router = new Router();
const User = require('./../models/user');
const bcryptjs = require('bcryptjs');

//@ENDPOINT   /auth/signup
router.post('/signup', (req, res, next) => {
  const { username, password, campus, course } = req.body;
  bcryptjs
    .hash(password, 10)
    .then(hash => {
      return User.create({
        username,
        passwordHash: hash,
        campus,
        course
      });
    })
    .then(user => {
      req.session.user = user._id;
      res.json({ user });
    })
    .catch(error => {
      next(error);
    });
});

//ENDPOINT  /auth/upload
router.post('/upload', (req, res, next) => {
  res.json({message: "User updated"});
});

//ENDPOINT  /auth/edit
router.post('/edit', (req, res, next) => {
  const { username, campus, course } = req.body;
  console.log(req.body);
  res.json({
    message: "User updated.", 
    response: `username: ${username}, campus: ${campus}, course: ${course}`
  });
});

//ENDPOINT  /auth/loggedin
router.get('/loggedin', (req, res, next) => {
  console.log(req);
  if (req.session.user) {
    res.json({message: "User logged"});
  } else {
    res.json({message: "User not logged in"});
  }
});

//ENDPOINT  /auth/login
router.post('/login', (req, res, next) => {
  // res.json({message: "User logged"});
  let userId;
  const { username, password } = req.body;
  User.findOne({ username })
    .then(user => {
      if (!user) {
        return Promise.reject(new Error("There's no user with that username."));
      } else {
        userId = user._id;
        return bcryptjs.compare(password, user.passwordHash);
      }
    })
    .then(result => {
      if (result) {
        req.session.user = userId;
        res.json({ message: "User logged", userId });
      } else {
        return Promise.reject(new Error('Wrong password.'));
      }
    })
    .catch(error => {
      next(error);
    });
});

//ENDPOINT  /auth/logout
router.post('/logout', (req, res, next) => {
  req.session.destroy();
  res.json({ message: "OK"});
});

module.exports = router;
