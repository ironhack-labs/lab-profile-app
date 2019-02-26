const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
const uploadCloud = require('../config/cloudinary.js');
require('dotenv');
// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

const login = (req, user) => {
  return new Promise((resolve,reject) => {
    req.login(user, err => {      
      if(err) {
        reject(new Error('Something went wrong'))
      }else{
        resolve(user);
      }
    })
  })
}

router.get("/login", (req, res, next) => {
  res.render("auth/login", { "message": req.flash("error") });
});


router.post('/update', uploadCloud.single('photo'),(req,res,next)=>{
 
  let id = req.body.id
  const {username,password,campus,course} = req.body
  User.findByIdAndUpdate(id,{username,password,campus,course})
  .then((data)=>{
    res.status(200).json({mensaje:"Correcto"})
  })
  .catch()

})

router.post('/updatePhoto', uploadCloud.single('photo'),(req,res,next)=>{

  const id = req.user._id
  const url = req.file.url
 const imgName = req.file.originalname;
 // const imgName = req.file.originalname;
  User.findByIdAndUpdate(id,{image:url})
  .then((photo)=>{
    res.status(200).json({mensaje:"Correcto",url: req.file.url, image: url})
  })
  .catch()


})

router.get('/loggedin',(req,res,next)=>{
  if(req.isAuthenticated()){
    res.status(200).json(req.user)
  }
})

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    console.log("Hola")
    // Check for errors
    if (err) next(new Error('Something went wrong')); 
    if (!theUser) next(failureDetails)

    // Return user and logged in
    login(req, theUser)
    .then(user => res.status(200).json({datos: req.user, "mensaje": "Logueado correctamente"}));
  
  })(req, res, next);
});

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post("/signup", (req, res, next) => {


  const {username,password,campus,course,image} = req.body

  if (username === "" || password === "") {
    res.render("auth/signup", { message: "Indicate username and password" });
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.render("auth/signup", { message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass,
      campus,
      course,
      image
    });

    newUser.save()
    .then(() => {
      res.json({"mensaje":"Guardado"})
    })
    .catch(err => {
      res.render("auth/signup", { message: "Something went wrong" });
    })
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
