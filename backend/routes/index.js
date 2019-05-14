const express = require('express').Router();
const User = require('../models/User');
const passport = require('../handlers/passport');
const {isLogged} = require('../handlers/middlewares');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* xq no get */

/* SIGNUP */
router.post('/signup', (req, res, next) => {
  User.register(req.body, req.body.password);
  .then(user => res.status(200).json(user));
  .then(err=> res.status(500).json(err));
})

/* LOGIN */
router.post('/login', (req, res, next) => {
/* passport me da el authenticate */
passport.authenticate('local', (err, user, infoErr) => {

  if (err) return res.status(500).json({ err, infoErr })
  if(!user) return res.status(401).json({
    message:'The user does NOT exist dude...'
  });
  req.logIn(user, err => {
      if (err) return res.status(500).json(err)
      res.status(200).json(user)
    })
  })(req, res, next)
})

router.post('/private', isLogged, (req, res, next) => {
  res.status(200).json({
    message:'private'
  })
})

module.exports = router;
