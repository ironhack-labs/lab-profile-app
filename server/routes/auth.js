const express = require('express');
const passport = require('passport');

const authRoutes = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

// Bcrypt to encrypt passwords
const bcryptSalt = 10;

authRoutes.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, failureDetails) => {
    if (err) {
      res.status(500).json({ message: 'Error in the authentication' });
      return;
    }
    if (!user) {
      res.status(500).json(failureDetails);
      return;
    }

    req.login(user, (error) => {
      if (error) {
        res.status(500).json({ message: 'Error in the authentication' });
        return;
      }
      res.status(200).json(user);
    });
  })(req, res, next);
});

authRoutes.post('/signup', (req, res) => {
  const { username, password } = req.body;

  if (username === '' || password === '') {
    res.status(500).json({ message: 'Provide username and password' });
    return;
  }

  User.findOne({
    username,
  }, 'username', (err, user) => {
    if (user !== null) {
      res.status(500).json({ message: 'Username taken' });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass,
    });
    console.log('f');

    newUser.save((er) => {
      if (er) {
        res.status(500).json({ message: 'Saving user to database went wrong.' });
      } else {
        req.login(newUser, (e) => {
          if (e) {
            res.status(500).json({ message: 'Login after signup went bad.' });
            return;
          }
          res.status(200).json(newUser);
        });
      }
    });
  });
});

authRoutes.get('/logout', (req, res) => {
  req.logout();
  res.status(200).json({
    message: 'Log out success!',
  });
});

authRoutes.get('/loggedin', (req, res) => {
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }
  res.status(403).json({ message: 'Unauthorized' });
});

// Edicion del perfil y subida de imagenes

// authRoutes.post('/upload', (req, res) => {

// });

// authRoutes.post('/edit', (req, res) => {

// });

module.exports = authRoutes;
