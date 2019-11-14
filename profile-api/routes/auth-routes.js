const express = require('express');       // Require express for router and execute it
const router = express.Router();
const User = require('../models/User');   // Require the User model
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.post('/login', (req, res, next) => {
  // Same as before, we destructure username and password from the request body
  let { username, password } = req.body;

  // Through mongoose in the User model, we search the DB for our user using the username
  User.findOne({ username })
  .then( user => {
    // After finding the user, we have to validate if the passwords are the same, using a bcrypt function
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if ( !isPasswordValid ) {
      // If password is INVALID, we respond to the request with a status of 401 (ERR, unauthorized),
      // the user and a message to explain the user through a notification
      return res.status(401).json({ msg: 'Invalid password' });
    }
    // If password is VALID, we respond to the request with a status of 200 (OK, request succeeded),
    // the user and little message CHANGE later with a token for authentication
    jwt.sign({ id: user._id }, process.env.SECRET, { expiresIn: 86400 }, (err, token) => {
      
      delete user._doc.password;

      if ( err ) return res.status(500).json({ err });

      res.status(200).json({ user, token, msg: 'Logged in correctly'  });

    })
  })
  .catch( err => {
    // We respond to the request with a status of 404 (ERR, not found),
    // the user and a message to explain the user through a notification
    res.status(404).json({ err, msg: 'Username does not exist in database' })
  });

});

router.post('/signup', (req, res, next) => {
  let { username, password, campus, course } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  User.create({ username, password: hashedPassword, campus, course })
  .then( user => {
    jwt.sign({ id: user._id}, process.env.SECRET, { expiresIn: 86400 }, (err, token) => {
      delete user._doc.password;

      if ( err ) return res.status(500).json({ err });

      res.status(200).json({ user, token, msg: 'User created correctly' });
    })
  })
  .catch( err => {
    // We respond to the request with a status of 404 (ERR, not found),
    // the user and a message to explain the user through a notification
    res.status(500).json({ err, msg: 'There was an error while creating the account...' })
  });
});

router.post('/logout', (req, res, next) => {
  res.status(200).json({ msg: 'User logged out correctly' });
})

module.exports = router;