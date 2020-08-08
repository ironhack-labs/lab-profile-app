const express = require('express');
const authRoutes = express.Router();
const passport = require('passport');
const bcrypt = require('bcryptjs');
const uploader = require('../configs/cloudinary-setup')


const User = require('../models/user-model');
const { Router } = require('express');

// POST	/auth/login	
authRoutes.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if (err) {
      res.status(500).json({ message: 'Something went wrong authenticating user' });
      return;
    }
    if (!theUser) {
      res.status(401).json(failureDetails);
      return;
    }
    // save user in session
    req.login(theUser, (err) => {
      if (err) {
        res.status(500).json({ message: 'Session save went bad.' });
        return;
      }
      res.status(200).json(theUser);
    });
  })(req, res, next);
});

// POST	/auth/signup
authRoutes.post('/signup', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const campus = req.body.campus;
  const course = req.body.course;
  const image = req.body.image;

  if (!username || !password) {
    res.status(400).json({ message: 'Provide username and password' });
    return;
  }
  if (password.length < 7) {
    res.status(400).json({ message: 'Please make your password at least 8 characters long for security purposes.' });
    return;
  }

  User.findOne({ username }, (err, foundUser) => {
    if (err) {
      res.status(500).json({ message: "Username check went bad." });
      return;
    }
    if (foundUser) {
      res.status(400).json({ message: 'Username taken. Choose another one.' });
      return;
    }
    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);
    const aNewUser = new User({
      username: username,
      password: hashPass,
      campus: campus,
      course: course,
      image: image
    });

    aNewUser.save(err => {
      if (err) {
        res.status(400).json({ message: 'Saving user to database went wrong.' });
        return;
      }
      // Automatically log in user after sign up
      // .login() here is actually predefined passport method
      req.login(aNewUser, (err) => {
        if (err) {
          res.status(500).json({ message: 'Login after signup went bad.' });
          return;
        }
        res.status(200).json(aNewUser);
      });
    });
  });
});


// POST	/auth/upload
authRoutes.post('/upload', uploader.single("image"), (req, res, next) => {
  console.log("upload listo")
  console.log("File: ", req.file)
  if (!req.file) {
    next(new Error('no file uploaded!'));
    return;
  }
  res.json({ path: req.file.path })
})

// PUT	/auth/edit
authRoutes.put('/edit', (req, res, next) => {
  // const username = req.body.username;
  // const password = req.body.password;
  // const campus = req.body.campus;
  // const course = req.body.course;
  const image = req.body.image;


  //achar o usuário pelo id e modificar a imagem
  //se o usuario está logado, tem uma sessao 
  const id = req.user._id
  User.findByIdAndUpdate(id, {image})
  .then(response => res.json({message: "image updated with success"}))
  .catch(err => res.json(err))
  

});


// POST	/auth/logout	
authRoutes.post('/logout', (req, res, next) => {
  // req.logout() is defined by passport
  req.logout();
  res.status(200).json({ message: 'Log out success!' });
});

// GET	/auth/loggedin	
authRoutes.get('/loggedin', (req, res, next) => {
  // req.isAuthenticated() is defined by passport
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);//req.user ==> acesso ao usuário que está logado. 
    return;
  }
  res.status(403).json({ message: 'Unauthorized' });
});


module.exports = authRoutes;