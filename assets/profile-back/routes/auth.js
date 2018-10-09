const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");

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


router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});


router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username === "" || password === "") {
    res.status(400).json({ message: 'Provide username and password' });
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (err) {
      res.status(500).json({ message: "Username check went bad." });
      return;
    }
    if (user !== null) {
      res.status(400).json({ message: 'Username taken. Choose another one.' });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass
    });

    newUser.save(err => {
      if (err) {
        res.status(400).json({ message: 'Saving user to database went wrong.' });
        return;
      }

      req.login(newUser, (err) => {

        if (err) {
          res.status(500).json({ message: 'Login after signup went bad.' });
          return;
        }
        res.status(200).json(newUser);
      });
    });
  });
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


router.get("/logout", (req, res) => {
  req.logout();
  res.status(200).json({message:'logged out'})
});


router.get('/loggedin', (req,res,next) => {
  if(req.user){
    res.status(200).json(req.user);
  }else{
    next(new Error('Not logged in'))
  }
})


module.exports = router;
