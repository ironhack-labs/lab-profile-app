
const User=require('../models/User.model')
const bcrypt=require('bcrypt')
const passport=require('../config/passport')
const mongoose=require('mongoose')

exports.signUpProcess=async(req,res)=>{
    const {username, password, campus, course}=req.body

    if(!username || !password){
        return res
        .status(403)
        .json({message:"Provide username and password"})
    }

    const user=await User.findOne({username})
    if(user){
        return res.status(400).json({message:"Error with username"})
    }

    const salt = bcrypt.genSaltSync(12)
    const hashPass = bcrypt.hashSync(password, salt)

    const newUser = await User.create({
        username,
        campus,
        course,
        password:hashPass
    })

    res.status(201).json({message:"Created"})

}

exports.loginProcess = async (req, res, next) => {
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
      req.login(user, err => {
        if (err) {
          return res
            .status(500)
            .json({ message: 'Something went wrong authenticating user' })
        }
        user.password = null
        res.status(200).json({message:'logged'})
      })
    })(req, res, next)
    }

exports.currentUser=(req,res)=>{
    res.json(req.user || null)
}

exports.updateUser=async(req,res)=>{
    const {id}=req.params
    const {username, campus, course}=req.body

    await User.findByIdAndUpdate(id, {username,campus,course})

    res.status(202).json({message:'Updated'})
}

exports.logout = (req,res)=>{
    req.logout()
    res.status(200).json({message:'OK'})
}