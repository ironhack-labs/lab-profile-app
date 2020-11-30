const User = require('../models/User')
const bcrypt = require('bcrypt')
const passport = require('passport')


//signUp//
exports.signupUser = async (req, res) => {
    const {
        username,
        password,
        campus,
        course
    } = req.body

    if (!username || !password || !campus || !course) {
        return res
            .status(403)
            .json({
                message: 'Provide all info'
            })
    }

    const user = await User.findOne({
        username
    })

    if (user) {
        return res
            .status(400)
            .json({
                message: 'Username already exists'
            })
    }

    const hashPass = bcrypt
        .hashSync(password, bcrypt.genSaltSync(12))

    const newUser = await User.create({
        username,
        password: hashPass,
        campus,
        course
    })


    newUser.password = null

    res.status(201).json({
        message: 'User created successfully!',
        user: {
          username,
          campus,
          course,
        },
      });
}

//login//

exports.loginUser = async (req, res, next) => {
    passport.authenticate('local', (
        err,
        user,
        failureDetails
    ) => {
        if (err) {
            return res
                .status(500)
                .json({
                    message: 'Something went wrong authenticating user'
                })
        }
        if (!user) {
            return res.status(401).json(failureDetails)
        }
        req.login(user, err => {
            if (err) {
                return res
                    .status(500)
                    .json({
                        message: 'Something went wrong authenticating user'
                    })
            }
            user.password = null
            res.status(200).json(user)
        })
    })(req, res, next)
}


//show Current user in session//
exports.loggedinUser = (req, res) => {
    res.json(req.user || null)
}

//logout of session//
exports.logoutUser = (req, res) => {
    req.logout()
    res.status(200).json({
        message: 'logged out'
    })
}

// edit picture//
exports.uploadUser = async (req, res) => {
    const {
        id
    } = req.params
    const {
        photo
    } = req.body;
    await User.findByIdAndUpdate(id, {
        photo
    })
    res.status(200).json({
        message: "picture uploaded"
    })
}

//edit user//
exports.editUser = async (req, res) => {
    const {
        id
    } = req.params
    const {
        username,
        campus,
        course
    } = req.body
    await User.findByIdAndUpdate(id, {
        username,
        campus,
        course
    })
    res.status(202).json({
        message: 'user updated'
    })
}