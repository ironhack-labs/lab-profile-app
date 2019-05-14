const express = require('express');
const router  = express.Router();
const User = require('../models/User')
const passport = require('../handlers/passport')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'))

router.post('/auth/signup',(req,res,next) => {
  User.register(req.body,req.body.password)
  .then(user => res.status(200).json(user))
  .catch(err => res.status(500).json(err))
})

router.post('/auth/login',(req,res,next) => {
  passport.authenticate('local',(err,user,infoErr) =>{
    if(err) return res.status(500).json({err,infoErr})
    if(!user) return res.status(401).json({msg: 'This user doesnt exist'})
    req.logIn(user,err => {
      if(err) res.status(500).json({err})
      res.status(200).json(user)
    })
  })(req,res,next)
})

router.post('/auth/upload',(req,res,next) => {

})

router.post('/auth/edit',(req,res,next) =>{
  User.update({_id:req.body.id},{ $set : { username: req.body.username, campus: req.body.campus, course:req.body.course }},{ new: true })
  .then(user => res.status(200).json(user))
  .catch(err => res.status(500).json(err))
})

router.get('/auth/logout',(req,res,next) =>{
  req.logOut()
  res.status(401).json({msg: 'OK'})
})

router.get('/auth/loggedin',(req,res,next) =>{

})

module.exports = router;


/* Method	Endpoint	Parameters	            Return Value
    POST	/auth/login	username, password	User logged
    POST	/auth/signup	username, password, campus, course	User created
    POST	/auth/upload	file	User updated
    POST	/auth/edit	username, campus, course	User updated
    GET	/auth/logout		OK Message
    GET	/auth/loggedin		User logged */