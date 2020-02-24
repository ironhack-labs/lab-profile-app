const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('../config/passport');
const upload  =require('../config/cloudinary')

router.post('/auth/login', passport.authenticate('local'), (req, res, next) => {
  const { user } = req;
  res.status(200).json({ user, msg: 'User logged'});
});

router.post(
  '/auth/signup', 
  async (req, res, next) => {
  const {username, password, campus, course} = req.body
  await User.register({username, campus, course}, password)    
  res.status(200).json({msg: 'User Created'})
});

router.post(
  '/auth/upload', 
  upload.single('image'), 
  async (req,res,next) => {
    const {id} = req.user
    const {secure_url: image} = req.file
    const user = await User.findByIdAndUpdate(id, {image}, {new: true})
    res.status(200).json({ msg: 'user updated' })
})

router.post('/auth/edit', isAuth, async (req,res,next) => {
  const {username, campus, course} = req.body
  const {id} = req.user
  await User.findByIdAndUpdate(id, {username, campus, course}, {new: true})
  res.status(200).json({msg: 'User updated'})
})

router.post('/auth/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ msg: 'OK - baibai' });
});

router.get('/auth/loggedin', isAuth, (req,res,next) => {
  res.status(200).json({msg: 'User  - Hello honey'})
})

router.get('/profile', isAuth, (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(500).json({ err }));
});

function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
}

module.exports = router;
