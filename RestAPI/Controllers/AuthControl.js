const bcrypt = require("bcrypt")
const User = require("../models/User.model")
const passport = require('passport')

exports.signupView = (req, res) => res.status(201).json("auth/signup")

exports.SignupProcess= async (req,res) => {
    const { email, password}= req.body

    if(!email || !password) {
        return res.status(204).json({message: "Please provide name,email and password"})
    }

    const user= await User.findOne({email})
    if(user){
        return res.status(403).json({message:"We already registered that email"})
    }

    const salt = bcrypt.genSaltSync(12)
    const hashPass = bcrypt.hashSync(password, salt)
    await User.create({
        email,
        password: hashPass
     })
     newUser.password = null

     res.status(201).json(newUser)
    }

exports.login= async(req,res,next)=> {
    passport.authenticate("local",(
        err,user,failuredDetails) =>
        {

        if (err){
            return res
            .status(500)
            .json({message: "Something went wrong while authenticating user"})
        }

        if (!user){
            return res.status(401).json(failureDetails)
        }

        req.login(user, err => {
            if (err) {
              return res
                .status(500)
                .json({ message: 'Something went wrong authenticating user' })
            }
            user.password = null
            res.status(200).json(user)
          })
        }) (req, res, next)
      }
    
      exports.currentUser = (req, res) => {
        res.json(req.user || null)
      }
      
      exports.logout = (req, res) => {
        req.logout()
        res.status(200).json({ message: 'logged out' })
      }