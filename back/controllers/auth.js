const bcrypt = require('bcrypt')
const User = require('../models/User')
const passport = require('passport')

exports.loginProcess = (req, res, next) => {
    passport.authenticate("local", (err, user, failureDetails) => {
        if(err) {
            return res.status(500).json("Error de autenticacion")
        } if (!user) {
            return res.status(401).json(failureDetails)
        } 
        req.login(user, err=> {
            if(err) {
                return res.status(500).json("Error de autenticacion")
            }
            user.password = null
            res.status(200).json(user)
        })
    })(req, res, next)
}

exports.signupProcess = async (req, res) => {
    try {
        const {username, password, campus, course } = req.body
        if (!username || !password) {
            return res.status(406).json({
                errorMessage: "Indicate username and password"
            })
        }
        const user = await User.findOne({ username })
        if (user) {
            return res.status(406).json({
                errorMessage: "Error"
            })
        }
        const salt = bcrypt.genSaltSync(12)
        const hashPass = bcrypt.hashSync(password, salt)
        await User.create({
            username,
            password: hashPass,
            campus,
            course
        })
        res.status(201).json({message: "User created"})
    } catch (err) {
        console.log(err)
    }
}

exports.uploadProcess = (req, res) => {

}

exports.editProcess = async (req, res) => {
    id = req.params.id
    const {username, campus, course } = req.body
    await User.findByIdAndUpdate(id, {username, campus, course })
    return res.status(202).json({message: "User updated"})
}

exports.logoutProcess = (req, res) => {
    req.logout()
    res.status(200).json({message: "User logged out"}) 
}

exports.loggedinProcess = (req, res) => {
    return res.json(req.user || null)
}
