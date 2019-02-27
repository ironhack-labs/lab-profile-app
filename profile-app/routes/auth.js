const express = require ('express');
const passport = require ('passport');
const authRoutes = express.Router ();
const User = require ('../models/User');

// Bcrypt to encrypt passwords
const bcrypt = require ('bcryptjs');
const bcryptSalt = 10;

authRoutes.post ('/signup', (req, res, next) => {
  const {username, password, campus, course} = req.body.profile

  if (!username || !password) {
    res.status (400).json ({message: 'Provide username and password'});
    return;
  }

  if (password.length < 4) {
    res.status (400).json ({
      message: 'Please make your password at least 4 characters long for security purposes.',
    });
    return;
  }

  User.findOne ({username}, (err, foundUser) => {
    if (err) {
      res.status (500).json ({message: 'Username check went bad.'});
      return;
    }

    if (foundUser) {
      res.status (400).json ({message: 'Username taken. Choose another one.'});
      return;
    }

    const salt = bcrypt.genSaltSync (bcryptSalt);
    const hashPass = bcrypt.hashSync (password, salt);

    const aNewUser = new User ({
      username: username,
      password: hashPass,
      campus: campus,
      course: course,
    });

    aNewUser.save(user => {
      
      if (err) {
        // console.log("save error")
        res
          .status (400)
          .json ({message: 'Saving user to database went wrong.'});
        return;
      }

      req.login (aNewUser, err => {
        if (err) {
          res.status (500).json ({message: 'Login after signup went bad.'});
          return;
        }

        res.status (200).json (user);
      });
    });
  });
});

authRoutes.post ('/login', (req, res, next) => {

  passport.authenticate ('local', (err, theUser, failureDetails) => {
    console.log(theUser)
    if (err) {
      res
        .status (500)
        .json ({message: 'Something went wrong authenticating user'});
      return;
    }

    if (!theUser) {
      res.status (401).json (failureDetails);
      return;
    }

    req.login (theUser, err => {
      if (err) {
        res.status (500).json ({message: 'Session save went bad.'});
        return;
      }

      res.status (200).json (theUser);
    });
  }) (req, res, next);
});

authRoutes.post ('/logout', (req, res, next) => {
  req.logout ();
  res.status (200).json ({message: 'Log out success!'});
});

authRoutes.get ('/loggedin', (req, res, next) => {
  if (req.isAuthenticated ()) {
    res.status (200).json (req.user);
    return;
  }
  res.status (403).json ({message: 'Unauthorized'});
});

module.exports = authRoutes;
