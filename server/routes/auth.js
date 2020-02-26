const express = require('express')
const router = express.Router()

const User = require('../models/User')
const passport = require('../config/passport')
const uploadCloud = require('../config/cloudinary')

router.post('/signup', (req, res, next) => {
    const { username, campus, course, password } = req.body
    const newUser = { username, campus, course }
    User.register(newUser, password)
        .then(user => res.status(201).json({ user }))
        .catch(err => res.status(500).json({ err }))
})

router.post('/login', passport.authenticate('local'), (req, res, next) => {
    const { user } = req
    res.status(200).json( {user} )
})

router.get('/logout', (req, res, next) => {
    req.logout()
    res.status(200).json({ msg: 'User logged out'})
})

module.exports = router