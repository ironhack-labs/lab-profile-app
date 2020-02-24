const User=require('../models/User')
const passport=require('passport')

exports.login=(req,res)=>{
    const {user}=req
    console.log(user)
    res.status(200).json({user})
}
exports.signup=(req,res)=>{
    User.register({username:req.body.username,campus:req.body.campus,course:req.body.course},req.body.password)
    .then(user=>res.status(201).json({user}))
    .catch(err=>res.status(500).json({err}))
}
exports.upload=async (req,res)=>{
    const {secure_url}=req.file
    const user= await User.findByIdAndUpdate(
        req.user._id,
        {image:secure_url},
        {new:true}
    )
    res.status(200).json({user})
}
exports.edit=async (req,res)=>{
    const user= await User.findByIdAndUpdate(
        req.user._id,
        {username:req.body.username,
         campus:req.body.campus,
         course:req.body.course},
        {new:true}
    )
    res.status(200).json({user})
}
exports.logout=(req,res)=>{
    req.logout()
    res.status(200).json({msg:'User logged out'})
}
exports.loggedin=(req,res)=>{
    User.findById(req.user._id)
        .then(user=>res.statys(200).json({user}))
        .catch(err=>res.status(500).json({err}))
}