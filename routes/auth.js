const express = require('express')
const router = express.Router()
const User = require('../models/User')
const passport = require('passport')
const { generateToken, verifyToken } = require('../helpers/jwt')

router.get('/private', verifyToken, (req, res, next) => {
  res.send("Esto sololo ven los usuarios logueado" + req.user.username)

})

router.post('/login',
  passport.authenticate('local'),
  (req, res, next) => {
    const token = generateToken(req.user)
    res.status(200).json({ token, user: req.user })
  })

router.post('/signup', (req, res, next) => {
  User.register(req.body, req.body.password)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(e => next(e))
})
// upload
router.post('/upload', (req, res, next) => {
  User.register(req.body, req.body.password)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(e => next(e))
})

// edit
router.post('/edit', (req, res, next) => {
  User.register(req.body, req.body.password)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(e => next(e))
})

// logout
router.get('/logout', (req, res, next) => {
  req.logOut()
  req.app.locals.user = null
  res.redirect('/login')
})

// loggedIn
router.get('/loggedin', (req, res, next) => {
  User.register(req.body, req.body.password)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(e => next(e))
})

module.exports = router