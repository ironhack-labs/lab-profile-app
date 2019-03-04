const express = require('express');
const router  = express.Router();
const User = require('../models/User')
const passport = require('passport')
const uploadCloud = require('../helpers/cloudinary')

// Awesome Middlewares
const isAuth = ()=>{
  if (!req.isAuthenticated()) {
    next()
  } else {
    res.status(401).json({message: "Log In Unsuccessful"})
  }
}

const notAuth = ()=>{
  if (req.isAuthenticated()) {
    res.status(401).json({message: "You are already a user"})
  } else {
    return next()
  }
}

// Routes

router.get('/logout', isAuth, (req,res,next)=>{
  req.logOut()
      .then(()=>{
        req.session.destroy(e=>{
          if(!e) return res.status(200).clearCookie("connect.sid").json({message:"OK"})
          console.log(e)
        })
      })
})

router.post('/edit', isAuth, (req, res, next) => {
  User.findOneAndUpdate({ username: req.body.username },{ message: "User Updated" })
      .then(() => {
        res.status(200).json({ message: "User updated" })
      })
      .catch(e=>console.log(e))
})

router.post('/upload', notAuth, uploadCloud.single("photoURL"), (req, res, next)=>{
  User.findOneAndUpdate({ username: req.body.username }, { photoURL: req.file.photoURL })
      .then(res=>{
        res.status(200).json({ image:req.user.photoURL }, { message: "User Updated" })
      })
      .catch(e=>console.log(e))
})

router.post('/login', passport.authenticate('local'), (req, res, next)=>{
  res.status(200).json(req.user, { message: "User Logged" })
})

router.post('/signup', (req, res, next)=>{
  User.register({...req.body}, req.body.password)
    .then(user => {
      res.json(user)
      res.status(200).json(user, { message: "User Created" })
    })
      .catch(e=>console.log(e))
})

module.exports = router;
