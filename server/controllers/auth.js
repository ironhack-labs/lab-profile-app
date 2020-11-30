const User = require('../models/User')
const bcrypt = require('bcrypt')
const passport = require('passport')

exports.signup = async (req, res) => {
  const { username, password, campus, course } = req.body

  if (!username || !password) {
    return res
      .status(403)
      .json({ message: 'Provide username and password' })
  }

  const user = await User.findOne({ username })

  if (user) {
    return res
      .status(400)
      .json({ message: 'Error with username' })
  }

  const hashPass = bcrypt
    .hashSync(password, bcrypt.genSaltSync(12))

  const newUser = await User.create({
    username,
    password: hashPass,
    campus,
    course,
  })

  newUser.password = null

  res.status(201).json(newUser)
}


exports.login = async (req, res, next) => {
  passport.authenticate('local', (
    err,
    user,
    failureDetails
  ) => {
    if (err) {
      return res
        .status(500)
        .json({ message: 'Something went wrong authenticating user' })
    }
    if (!user) {
      return res.status(401).json(failureDetails)
    }

    //Ejecutamos a manita el metodo login del request que guarda a nuestro user en req.user

    req.login(user, err => {
      if (err) {
        return res
          .status(500)
          .json({ message: 'Something went wrong authenticating user' })
      }
      user.password = null
      res.status(200).json(user)
    })
  })(req, res, next)
}

exports.currentUser = (req, res) => {
  res.json(req.user || null)
}

exports.logout = (req, res) => {
  req.logout()
  res.status(200).json({ message: 'logged out' })
}