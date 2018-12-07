const express = require("express");
const passport = require('passport');
const authRoutes = express.Router();
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;



authRoutes.post("/login", (req, res, next) => passport.authenticate('local', function(err, user, info) {  //modifico este post de login como en documentación passport
    if (err) {
    res.status(500).json({ message: 'Something went wrong authenticating user' });
    return;
  }
  if (!theUser) {
  // "failureDetails" contains the error messages
  // from our logic in "LocalStrategy" { message: '...' }.
  res.status(401).json(failureDetails);
  return;
  }
  // save user in session
  req.login(theUser, (err) => {
    if (err) {
        res.status(500).json({ message: 'Session save went bad.' });
        return;
    }
    // We are now logged in (that's why we can also send req.user)
    res.status(200).json(theUser);
    });
})(req, res, next));


authRoutes.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username === "" || password === "") {
    res.status(400).json ({message: 'Provide username and password'}) //modifico res.render por res.status
    return;
  }

  User.findOne({ username }, "username", (err, user) => { //busco user
    if (user !== null) {
      res.status(400).json({ message: 'Username taken. Choose another one.' }); //modifico res.render por res.status
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);   //hasheo contraseña 
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({    //creo user
      username,
      password: hashPass
    });

    newUser.save((err, user) => {
      if (err) {
          res.status(400).json({ message: 'Saving user to database went wrong.' });     //modif forma de guardar user
          return;
      }
      console.log(req)
      // Automatically log in user after sign up
      // .login() here is actually predefined passport method
      req.logIn(user, (err) => {

          if (err) {
              res.status(500).json({ message: 'Login after signup went bad.' });
              return;
          }
      
          // Send the user's information to the frontend
          // We can use also: res.status(200).json(req.user);
          res.status(200).json(user);
      });
  });

  authRouter.post('/edit', (req, res) => {      //con POST	tengo la ruta de EDIT /auth/edit con params:username, campus, course. Y devuelve User updated

    User.findByIdAndUpdate(req.user.id, { username: req.body.username, campus: req.body.campus, course: req.body.course }, {new:true}).then((user) => {
      res.status(200).json(user);
    });
   });


  authRoutes.get('/loggedin', (req, res, next) => {     //si guarda bien user entro a hacer este loggedin.(desde React hago peti xa saber si en Back estoy logueado)
    // req.isAuthenticated() is defined by passport
    if (req.isAuthenticated()) {
        res.status(200).json(req.user);
        return;
    }
    res.status(403).json({ message: 'Unauthorized' });
});

  });
});

authRoutes.get("/logout", (req, res) => { //Quito todos los gets menos este  de Logout
  req.logout();
  res.redirect("/");
});

module.exports = authRoutes;
