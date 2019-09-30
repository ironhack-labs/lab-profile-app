const express = require('express');
const router  = express.Router();
const User = require('../models/User')
const passport = require('../config/passport')
//Signup

router.post('/signup', (req,res,next) => {

  User.register(req.body, req.body.password)
  .then((user) => res.status(201).json({user}))
  .catch((error) => res.status(500))
  
})

//Login

router.post('/login',passport.authenticate('local') ,(req,res,next) => {
const user = req.user
res.status(200).json({user})
})

//Edit
router.post('/edit', isAuth , async (req,res,next) => {
  const {_id} = req.user
  const {username, campus, course} = req.body
  try{
    console.log(username, campus, course)
    const user =  await User.findByIdAndUpdate(_id , {username, campus, course}) 
    res.status(200).json({user, message: "User updated"}) 
  }
  catch {
    res.status(500)
  } 
} )
//logout
router.post('/logout', (req,res,next) => {
  const {user} = req
  req.logout()
  res.status(200).json({user, message: "User logged out"})
})

//Get logged user

router.get('/loggedin', (req,res,next) => {
  const {user} = req
  res.status(200).json({user, message: "User logged"})
})

function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
}

module.exports = router;
