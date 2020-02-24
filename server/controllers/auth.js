const User = require("../models/User");
const passport = require("passport");

exports.login=async(req,res,next)=>{
	const { user } = req;
  res.status(200).json({ user });
}


exports.signup=async(req,res,next)=>{
  const {username, password, campus, course} = req.body
  const newUser = {username, campus, course}
  User.register(newUser, password)
      .then((user) => res.status(201).json({ user }))
      .catch((err) => res.status(500).json({ err }))
}


exports.upload=async(req,res,next)=>{
  const { secure_url } = req.file
  const user = await User.findByIdAndUpdate(
    req.user._id,
    { image: secure_url },
    { new: true }
  )
  res.status(200).json({ user })
}

exports.edit=async(req,res)=>{
  const {id, username,campus,course} = req.body
  const editUser = {username, course, campus}
  User.findByIdAndUpdate({_id: id}, editUser, {new: true})
  .then( user => res.status(200).json({user}))
  .catch( err => res.status(500).json({err}))
}

exports.logout=(req, res, next) => {
  req.logout();
  res.status(200).json({ msg: 'Logged out' });
};

exports.loggedin=(req,res,next)=>{
  User.findById(req.user._id)
      .then((user) => res.status(200).json({ user }))
      .catch((err) => res.status(500).json({ err }));
}