const router = require('express').Router();
const User = require('../models/User');
const passport = require('../handlers/passport');
const {isLogged} = require('../handlers/middlewares');

/* no hay get porque no renderizamos pags nuevas */

/* SIGNUP */
router.post('/signup', (req, res, next) => {
    const username = req.body.username
    const password = req.body.password
  
    if(!username || !password) {
      res.status(400).json({
        message: 'Plis provide username and password'
      })
      return;
    }
  
    if(password.length < 3) {
      res.status(400).json({
        message: 'Password too short, at least 3 characters'
      })
      return
    }
  
    User.register(username, password)
    .then(user => res.status(200).json(user))
    .then(err=> res.status(500).json(err))
  
    req.login(User, (err) => {
      if(err) {
        res.status(500).json({
          message: 'Loggin went bad'
        })
        return
      }
  
      res.status(200).json(User)
    })
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
  
  /* LOGGED IN */
  router.post('/loggedin', isLogged, (req, res, next) => {
    res.status(200).json({
      message:'you are logged in'
    })
  })
  
  /* LOGOUT */
  router.get('/logout', isLogged, (req, rex, next) => {
    /* logout es de passport */
    req.logout()
    req.status(200).json({
      message: 'Logged out'
    })
  
  /*  
  ESTO LO VI POR AHÍ, NECESITO ENTENDER: 
  
  req.session.destroy(err => {
      if(!err) {
        res.status(200)
        .clearCookie('connect.sid', {path: '/'})
        .json({
          message: 'Logged out'
        })
      }
    }) */
  })
  
  module.exports = router;