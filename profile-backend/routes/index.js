const express = require('express');
const router  = express.Router();
const User = require('../models/User')
const passport = require('../helpers/passport')
const uploadCloud = require('../helpers/cloudinary');

/* GET home page */

//authenticated
function isAuth(req,res,next){
  if(req.isAuthenticated()){
    next()
  }else{
    console.log("no loggeado ")
    res.status(401).json({ message: "No te has logueado" });

  }
}
//singup
router.post('/signup',(req,res,next)=>{
  User.register(req.body, req.body.password)
    .then(user=>{
      res.status(201).json(user)
    })
})

//loggin
router.post('/login',passport.authenticate('local'),(req,res,next)=>{
  res.status(200).json(req.user)
})

//perfil
router.get('/profile', isAuth,(req,res,next)=>{
  if(!req.user) res.redirect('/login')
  User.findById(req.user._id)
  .then((user)=>{
    res.status(200).json(user)
  })
  .catch(e=>next(e))
})

//cloudinary profile pic
router.post('/imageProfile',uploadCloud.single('picture'),isAuth,(req,res,next)=>{
  User.findByIdAndUpdate(req.body._id ,{image:req.file.url})
  .then(()=>{
    res.status(200).json({ message: "Lo lograste! puedes ver, he subido tu foto", profilePic: req.file.url })
  })
  .catch(e=>next(e))
})

//logout
router.get('/logout',(req,res,next)=>{
  req.logOut()
  res.status(200).json({ message: "saliste" });
  res.redirect('/')

})


router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
