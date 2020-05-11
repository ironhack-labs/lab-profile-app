const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../models/User');
const uploadCloud = require('../config/cloudinary');

// Bcrypt to encrypt passwords
const bcrypt = require('bcrypt');
const bcryptSalt = 10;

router.post('/login', passport.authenticate('local'), (req, res, next) => {
  const { user } = req;
  res.status(200).json({ user, msg: 'User logged' });
});

router.post('/signup', async (req, res, next) => {
  const { username, password, campus, course } = req.body;
  await User.register({ username, campus, course }, password);
  res.status(200).json({ msg: 'User Created' });
});

router.post('/upload', uploadCloud.single('image'), async (req, res, next) => {
  const { id } = req.user;
  const { secure_url: image } = req.file;
  const user = await User.findByIdAndUpdate(id, { image }, { new: true });
  res.status(200).json({ msg: 'user updated', user });
});

router.post('/edit', isAuth, async (req, res, next) => {
  const { username, campus, course } = req.body;
  const { id } = req.user;
  await User.findByIdAndUpdate(id, { username, campus, course }, { new: true });
  res.status(200).json({ msg: 'User updated' });
});

router.post('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ msg: 'OK - baibai' });
});

router.get('/loggedin', isAuth, async (req, res, next) => {
  const user = await User.findById(req.user._id);
  res.status(200).json({ msg: 'User  - Hello honey', user });
});

function isAuth(req, res, next) {
  req.isAuthenticated()
    ? next()
    : res.status(401).json({ msg: 'Log in first' });
}

module.exports = router;
