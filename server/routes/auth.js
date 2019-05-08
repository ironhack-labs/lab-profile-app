const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const uploadCloud = require('../config/cloudinary');





router.get("/", ensureLoggedOut(), (req, res, next) => {
  res.redirect("login");
});



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

router.post('/login', ensureLoggedOut(), (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    
    // Check for errors
    if (err) next(res.status(500).json({error:"Something went wrong"})); 
    if (!theUser) next(failureDetails)

    // Return user and logged in
    login(req, theUser).then(user => res.status(200).json(req.user));

  })(req, res, next);
});

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post("/signup", ensureLoggedOut(), (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const campus = req.body.campus;
  const course = req.body.course;
  if (username === "" || password === "") {
    next(res.status(500).json({error:"Indicate username and password"}));
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      next(res.status(500).json({error:"The username already exists"}));
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass,
      campus: campus,
      course: course
    });

    newUser.save()
    .then((userCreated) => {
      res.json(userCreated);
    })
    .catch(err => {
      next(res.status(500).json({error:"Something went wrong"}));
    })
  });
});

router.get('/loggedin', (req,res,next) => {
  if(req.user){
    res.status(200).json(req.user);
  }else{
    next(res.status(500).json({error:"Nobody loggedin"}))
  }
})

router.get("/logout", ensureLoggedIn('/login'), (req, res) => {
  req.logout();
  res.status(200).json({message:"Nobody loggedin"})
});


router.post("/edit", ensureLoggedIn('/login'), (req, res, next) => {
  const username = req.body.username;
  const campus = req.body.campus;
  const course = req.body.course;


  User.findOneAndUpdate(
    { "username" : username }, 
    {$set:{campus: campus , course:course}} ,
    {new:true})
    .then(userUpdated=>{
      if (userUpdated === null) {
        next(res.status(500).json({error:"User not found"}));
        return;
      }
      res.status(200).json({userUpdated})})
      .catch(err => {
        next(res.status(500).json({error:"Something went wrong"}));
    }).catch(err=>{next(res.status(500).json({error:"User not found"}))})  

});


router.post("/upload", uploadCloud.single('image') ,(req, res, next) =>{
  if(req.user){
    User.findOneAndUpdate(
      { "username" : req.user.username }, 
      {$set:{image: req.file.url }} ,
      {new:true})
      .then(userUpdated=>{
        if (userUpdated === null) {
          next(res.status(500).json({error:"User not found"}));
          return;
        }
        res.status(200).json({userUpdated})})
        .catch(err => {
          next(res.status(500).json({error:"Something went wrong"}));
      }).catch(err=>{next(res.status(500).json({error:"User not found"}))})  
  }else{
    next(new Error('Not logged in'))
  }
})

module.exports = router;
