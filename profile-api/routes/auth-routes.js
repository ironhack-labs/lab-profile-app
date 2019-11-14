const express = require('express');       // Require express for router and execute it
const router = express.Router();
const User = require('../models/User');   // Require the User model

router.post('/login', (req, res, next) => {
  // Same as before, we destructure username and password from the request body
  let { username, password } = req.body;

  // Through mongoose in the User model, we search the DB for our user using the username
  User.findOne({ username })
  .then( user => {
    // After finding the user, we have to validate if the passwords are the same. CHANGE using bcryp later
    if ( password !== user.password ) {
      // If password is INVALID, we respond to the request with a status of 401 (ERR, unauthorized),
      // the user and a message to explain the user through a notification
      return res.status(401).json({ msg: 'Invalid password' })
    }
    // If password is VALID, we respond to the request with a status of 200 (OK, request succeeded),
    // the user and little message CHANGE later with a token for authentication
    res.status(200).json({ user, msg: 'Logged in correctly' });
  })
  .catch( err => {
    // We respond to the request with a status of 404 (ERR, not found),
    // the user and a message to explain the user through a notification
    res.status(404).json({ err, msg: 'Username does not exist in database' })
  });

});

router.post('/signup', (req, res, next) => {
  let { username, password } = req.body;

  User.create({ username, password })
  .then( user => {
    res.status(200).json({ user, msg: 'User created correctly' });
  })
  .catch( err => {
    // We respond to the request with a status of 404 (ERR, not found),
    // the user and a message to explain the user through a notification
    res.status(404).json({ err, msg: 'There was an error while creating the account...' })
  });
});

module.exports = router;