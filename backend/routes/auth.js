const express = require('express')
const router = express.Router()
const User = require('../models/User')
const passport = require('../handlers/passport')
// const cloudinary = require('../handlers/cloudinary')


//

function isAuth (req,res,next){
  if (req.isAuthenticated ()){
    next ()
  } else {
    res.status(401).json({message: 'you arent log yet ' })
  }
}

//signup

router.post ('/signup', (req,res,next) => {
 User.register(req.body, req.body.password)
 .then(user => res.status(200).json (user))
 .cath(err=> res.status(500).json(err))
})

//login
router.post('/login', (req,res,next)=>{
  passport.authenticate('local', (err, user,infoErr) =>{
    if (err) return res.status(500).json({err, infoErr})
    if(!err) return res.status(401).json({message: 'user doesnt exist'})
    req.logIn(user, err => {
      if(err) return res.status(500).json(err)
      res.status(200).json(user)
    })
  }) (req,res,next)
})



//logged in 

router.get('/loggedin', isLogged, (req, res, next) => {
  res.status(200).json({ msg: 'You are in' })
})

function isLogged(req, res, next) {
  if (!req.isAuthenticated()) return res.status(401).json({ msg: "You're not logged" })
  next()
}

//logout
router.get("/logout", isAuth, (req, res) => {
  req.logout()

  req.session.destroy(err => {
    if (!err) {
      res
        .status(200)
        .clearCookie("connect.sid", { path: "/" })
        .json({ message: "Logged out" })
    }
  })
})

// edit

router.post("/edit", isAuth, (req, res, next) => {
  User.findByIdAndUpdate(req.user._id, req.body)
    .then(() => {
      res.status(200).json({ message: "User updated" })
    })
    .catch(e => console.log(e))
})

// Profile pic
// router.post(
//   "/upload",
//   isAuth,
//   uploadCloud.single("image"),
//   (req, res, next) => {
//     console.log(req.user, req.file)
//     User.findByIdAndUpdate(req.user._id, { image: req.file.url })
//       .then(response => {
//         res.status(200).json({
//           image: req.user.image,
//           message: "User logged"
//         })
//       })
//       .catch(e => console.log(e))
//   }
// )



module.exports = router