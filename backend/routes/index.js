const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('../config/passport');

function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
}

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/signup', (req, res) => {
  User.register(req.body, req.body.password)
    .then((user) => res.status(201).json({ user, msg: 'User created' }))
    .catch((err) => res.status(500).json({ err }))
})

router.post('/login', passport.authenticate('local'), (req, res, next) => {
  const { user } = req
  res.status(201).json({ user, msg: 'User logged' })
})

router.post('/edit/:id', isAuth, (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
    .then((user) => res.status(200).json({ user, msg: 'User Updated' }))
    .catch((error) => res.status(500).json({ error }));
})

router.get('/logout', (req, res, next) => {
  req.logout();
  req.session.destroy((err) => {
    if (!err) {
      res.status(200)
        .clearCookie("connect.sid", { path: "/" })
        .json({ msg: 'OK, user logged out' });
    }
  })
});

router.get('/profile', isAuth, (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => res.status(200).json({ user, msg: 'User logged' }))
    .catch((err) => res.status(500).json({ err }));
});


module.exports = router;