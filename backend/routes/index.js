const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('../config/passport');
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({ msg: user });
}
//Signup
router.post('/signup', (req, res, next) => {
  User.register(req.body, req.body.password)
    .then((user) => res.status(201).json({ user }))
    .catch((err) => res.status(500).json({ err }));
});
//Login
router.post('/login', passport.authenticate('local'), (req, res, next) => {
  const { user } = req;
  res.status(200).json({ user });
})
//Upload - Not required
//Edit
router.post('/edit', (req, res, next) => {
  const { username, campus, course, image } = req.body
  User.findByIdAndUpdate(req.user._id, { username, campus, course, image })
    .then((user) => res.status(200).json({ user }))
    .catch((err) => console.log(err))
});
//Get login
router.get('/loggedin', isAuth, (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(500).json({ err }));
});
//Get logout
router.get('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ msg: 'Logged out' });
});
module.exports = router;
