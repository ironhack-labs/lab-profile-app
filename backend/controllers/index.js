const User = require('../models/User')
const passport = require('passport')

exports.signup = async (req, res, next) => {
    const { course, email, password, campus } = req.body
    const userOnDB = await User.findOne({ email })
    if (userOnDB !== null) {
      return res.status(406).json({message: 'email already registered'})
    }
        const user = await User.register({ email, course, campus }, password)
    passport.authenticate()(req, res, next)
    res.status(201).json({user})
}

exports.loggedIn = async (req, res) => {
    if(req.isAuthenticated()) res.status(200).json({message: 'User logged'})
    res.status(401).json({message: 'Not logged in'})
}

exports.logout = (req, res) => {
    req.logout()
    res.status(200).json({message: 'logged out'})
}

exports.edit = async (req, res) => {
    if(req.isAuthenticated()){
        let logged = req.user
        const {email, campus, course} = req.body
        await User.findByIdAndUpdate(logged._id, {email, campus, course})
        return res.status(200).json({message: 'User updated'})
    }
    res.status(401).json({message: 'User not logged In'})
}

exports.upload = async (req, res) => {
    // const {files} = req
    // console.log(req.files)
    res.status(200).json({file: req.files})
}
