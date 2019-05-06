const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

const login = (req, user) => {
  return new Promise((resolve, reject) => {
    req.login(user, err => {
      if(err){
        reject(new Error('Something went wrong'));
      }else{
        resolve(user);
      } 
    })
  })
}

router.post("/login", (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if(err){
      next(new Error('Something went wrong'));
    }
    if(!theUser){
      next(failureDetails);
    }

    login(req, theUser)
      .then(user => res.status(200).json(req.user));
  })(req, res, next);
});

router.post("/signup", (req, res, next) => {
  const {username, password, campus, course} = req.body;

  if(username.trim().length <= 0 || password.trim().length <= 0 || campus.trim().length <= 0 || course.trim().length <= 0){
    res.status(500).json({
      code: 500,
      message: 'You must provide valid credentials'
    })
  }

  User.findOne({username})
    .then(foundUser => {
      if(foundUser){
        throw new Error('Username already exists');
      }

      const salt = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(password, salt);

      return new User({
        username,
        password: hashPass,
        campus,
        course
      }).save();
    })
    .then(savedUser => login(req, savedUser))
    .then(user => res.json({
      code: 200, 
      message: user
    }))
    .catch(err => res.status(500).json({
      code: 500,
      message: err
    }));
});

router.post('/upload', (req, res, next)=>{

});

router.post('/edit', (req, res, next)=>{

});

router.get('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({
    code: 200,
    message: 'logged out'
  });
});

router.get('/loggedin', (req, res, next) => {
  if(req.user){
    res.status(200).json({
      code: 200,
      message: req.user
    });
  }else{
    res.status(401).json({
      code: 401,
      message: 'User not logged'
    })
  }
});

module.exports = router;
