const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../models/User');

// Bcrypt to encrypt passwords
const bcrypt = require('bcrypt');
const bcryptSalt = 10;

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, failureDetails) => {
    if (err) {
      console.log(failureDetails);
      res
        .status(500)
        .json({ message: 'Something went wrong authenticating user' });
      return;
    }

    if (!user) {
      res.status(401).json(failureDetails);
      return;
    }
    req.login(user, (err) => {
      if (err) {
        res.status(500).json({ message: 'Session save went bad.' });
        return;
      }
      res.status(200).json(user);
    });
  })(req, res, next);
});

router.post('/signup', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username === '' || password === '') {
    res.status(401).json({ message: 'Indicate username and password' });
    return;
  }

  User.findOne({ username }, 'username', (err, user) => {
    if (user !== null) {
      res.status(401).json({ message: 'The username already exists' });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass,
    });

    newUser
      .save()
      .then(() => {
        res.status(200).json({ message: 'ok' });
      })
      .catch((err) => {
        res.status(500).json({ message: 'Something went wrong' });
      });
  });
});

router.get('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ message: 'loggedOut' });
});

router.get('/currentuser', (req, res) => {
  res.status(200).json({ user: req.user });
});

router.put('/photo', async (req, res, next) => {
  const { image } = req.body;
  const user = await User.findByIdAndUpdate(
    req.user.id,
    { image: image },
    { new: true }
  );
  // res.send(user);
  res.status(201).json({ message: 'photo updated' });
});

module.exports = router;
