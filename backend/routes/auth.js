const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../models/User');
const uploadCloud = require('../config/cloudinary');

// Bcrypt to encrypt passwords
const bcrypt = require('bcrypt');
const bcryptSalt = 10;

router.post(
  '/login',
  passport.authenticate('local', {
    failureRedirect: '/auth/login',
    failureFlash: true,
    passReqToCallback: true,
  }),
  (req, res) => {
    res.status(200).json({ user: req.user });
  }
);

router.post('/signup', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const campus = req.body.campus;
  const course = req.body.course;

  if (username === '' || password === '') {
    res.json({ message: 'Indicate username and password' });
    return;
  }

  User.findOne({ username }, 'username', (err, user) => {
    if (user !== null) {
      res.json({ message: 'The username already exists' });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass,
      campus,
      course,
    });

    newUser
      .save()
      .then(({ username, _id }) => {
        res.status('201').json({ username, _id });
      })
      .catch((err) => {
        res.json({ message: 'Something went wrong' });
      });
  });
});

router.get('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ message: 'Logged Out' });
});

router.post('/upload', uploadCloud.single('image'), async (req, res, next) => {
  const { id } = req.user;
  const { secure_url: image } = req.file;
  const user = await User.findByIdAndUpdate(id, { image }, { new: true });
  res.status(200).json({ msg: 'user updated', user });
});

module.exports = router;
