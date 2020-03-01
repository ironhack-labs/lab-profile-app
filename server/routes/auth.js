const express = require('express');
require('dotenv')
const User = require('../models/User');
const Photo = require('../models/photo')
const router  = express.Router();

const bcrypt = require('bcrypt');
const passport = require('passport');
const uploadCloud = require('../config/cloudinary.js');


const login = (req, user) => {
  return new Promise((resolve,reject) => {
    req.login(user, err => {
      console.log('req.login ')
      console.log(user)

      
      if(err) {
        reject(new Error('Something went wrong'))
      }else{
        resolve(user);
      }
    })
  })
}


// SIGNUP
router.post('/signup', (req, res, next) => {

  const {username, password, campus, course} = req.body;

  console.log(req.body)
  // console.log('username', username)
  // console.log('password', password)

  // Check for non empty user or password
  if (!username || !password){
    next(new Error('You must provide valid credentials'));
  }

  // Check if user exists in DB
  User.findOne({ username })
  .then( foundUser => {
    if (foundUser) throw new Error('Username already exists');

    const salt     = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    return new User({
      username,
      password: hashPass,
      campus,
      course
    }).save();
  })
  .then( savedUser => login(req, savedUser)) // Login the user using passport
  .then( user => res.json({status: 'signup & login successfully', user})) // Answer JSON
  .catch(e => next(e));
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    
    // Check for errors
    if (err) next(new Error('Something went wrong')); 
    if (!theUser) next(failureDetails)

    // Return user and logged in
    login(req, theUser).then(user => res.status(200).json(req.user));

  })(req, res, next);
});


router.get('/currentuser', (req,res,next) => {
  if(req.user){
    res.status(200).json(req.user);
  }else{
    next(new Error('Not logged in'))
  }
})


router.get('/logout', (req,res) => {
  req.logout();
  res.status(200).json({message:'logged out'})
});


router.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
})


//actual write to cloudinary via the middleware specified in ../config/cloudinary.js
router.post('/upload', uploadCloud.single('photo'), (req, res, next) => {
  const imgName = req.file.originalname
  const newPhoto = new Photo({imgName})
  console.log(req.file.url);
  
  //actual write in mongo using mongoose
  newPhoto.save()
  .then(photo => {
    res.json({url: req.file, photo: photo});
  })
  .catch(error => {
    console.log(error);
  })
});



module.exports = router;
