const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('../config/passport');
const uploadCloud = require('../config/cloudinary')

router.post('/signup', (req, res, next) => {
  const {email, course, campus, password} = req.body
  const newUser = {email, campus, course}
  User.register(newUser, password)
    .then((user) => res.status(201).json({ user }))
    .catch((err) => res.status(500).json({ err }));
});

router.post('/login', passport.authenticate('local'), (req, res, next) => {
  const { user } = req;
  res.status(200).json({ user });
});

router.get('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ msg: 'Logged out' });
});

router.post('/upload', uploadCloud.single('photoURL'), async (req, res, next) => {
  const { secure_url } = req.file
  const user = await User.findByIdAndUpdate(
    req.user._id,
    { image: secure_url },
    { new: true }
  )
  res.status(200).json({ user })
})

router.post('/edit', (req, res) => {
  const {id, email, course, campus, password} = req.body
  const editUser = {email, course, campus}
  User.findByIdAndUpdate({_id: id}, editUser, {new: true})
  .then( user => res.status(200).json({user}))
  .catch( err => res.status(500).json({err}))
})

router.get('/loggedin', isAuth, (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(500).json({ err }));
});

function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
}

module.exports = router;