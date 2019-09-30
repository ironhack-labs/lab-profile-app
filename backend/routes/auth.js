const express = require('express')
const passport = require('passport')
const User = require('../models/User')
const { isAuth } = require('../handlers/middleware')

const router = express.Router();

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user) => {
    if (err) return res.status(403).send({ message: err })
    if (!user)
      return res.status(404).send({ message: 'This user does not exist.' })

    req.logIn(user, err => {
      if (err) return res.status(500).send({ message: err.message })

      res.status(200).send(user)
    })
  })(req, res, next)
})

router.post('/signup', (req, res, next) => {
  const { username, campus, course, password } = req.body

  User.register(
    {
      username,
      campus,
      course
    },
    password
  )
    .then(user => {
      req.logIn(user, err => {
        if (err) return res.status(500).send({ message: err.message })

        res.status(200).send(user)
      });
    })
    .catch(err => res.status(500).send({ message: err.message }))
});


router.post('/edit', isAuth, (req, res, next) => {
  const { _id: userId } = req.user
  const { username, campus, course } = req.body

  User.findByIdAndUpdate(
    userId,
    {
      username,
      campus,
      course
    },
    { new: true }
  )
    .then(user => {
      res.status(200).send(user)
    })
    .catch(err => res.status(500).send({ message: err.message }))
})

router.get('/logout', isAuth, (req, res, next) => {
  req.logOut()
  res.status(200).send({ message: 'Ok' })
})

router.get('/loggedin', isAuth, (req, res, next) => {
  res.status(200).send(req.user)
})

module.exports = router