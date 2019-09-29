const express = require('express');
const router  = express.Router();
const User = require('../models/User');
const passport = require('../config/passport');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/auth/signup', async(req, res, next) => {
  try{
    let user = await User.register(req.body, req.body.password)

    res.status(201).json({user})
  } catch (err){
    res.status(500).json({err})
  }
});

router.post('/auth/login', passport.authenticate('local'), (req, res, next) => {
  const {user} = req
  res.status(200).json({ user });
});

router.post('/auth/edit', (req, res, next) => {
  
});

router.get('/auth/logout', (req, res, next) => {
  req.logout()
  res.status(200).json({ msg: 'Logged out' })
});

router.get('/auth/loggedin', isAuth, async(req, res, next) => {
  try{
    const user = await User.findById(req.user._id)

    res.status(201).json({user})
  } catch (err){
    res.status(500).json({err})
  }
});

function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in is required' })
}

module.exports = router;


// router.post('/auth/signup', (req, res, next) => {
//   User.register(req.body, req.body.password)
//   .then((user) => res.status(201).json({user}))
//   .catch((err) => res.status(500).json({err}))
// });