const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

//SIGNUP
router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const campus = req.body.campus;
  const course = req.body.course;
  if (!username || !password) {
    res.status(400).json({
      message: 'Provide username and password'
    });
    return;
  }

  if (password.length < 7) {
    res.status(400).json({
      message: 'Please make your password at least 8 characters long for security purposes.'
    });
    return;
  }

  User.findOne({
    username
  }, (err, foundUser) => {

    if (err) {
      res.status(500).json({
        message: "Username check went bad."
      });
      return;
    }

    if (foundUser) {
      res.status(400).json({
        message: 'Username taken. Choose another one.'
      });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass,
      campus,
      course
    });

    newUser.save(err => {
      if (err) {
        res.status(400).json({
          message: 'Saving user to database went wrong.'
        });
        return;
      }
      req.login(newUser, (err) => {

        if (err) {
          res.status(500).json({
            message: 'Login after signup went bad.'
          });
          return;
        }
        res.status(200).json(newUser);
      });
    });

  });
});

//LOGIN
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if (err) {
      res.status(500).json({
        message: 'Something went wrong authenticating user'
      });
      return;
    }

    if (!theUser) {
      res.status(401).json(failureDetails);
      return;
    }

    // save user in session
    req.login(theUser, (err) => {
      if (err) {
        res.status(500).json({
          message: 'Session save went bad.'
        });
        return;
      }
      // We are now logged in (thats why we can also send req.user)
      res.status(200).json(theUser);
    });
  })(req, res, next);
});

//TODO: implement edit route
router.post("/edit", (req, res, next) => {
  if (!req.isAuthenticated()) {
    res
      .status(401)
      .json({
        message: "You need to be logged in to edit your profile"
      });
    return;
  }

  // 2. Updating `req.user` with each `req.body` field
  const cannotUpdateFields = ["_id", "password"];
  Object.keys(req.body)
    .filter(key => cannotUpdateFields.indexOf(key) === -1)
    .forEach(key => {
      req.user[key] = req.body[key];
    });

  // 3. Validating user with its new values (see: https://mongoosejs.com/docs/validation.html#async-custom-validators)
  req.user.validate(function (error) {
    if (error) {
      // see: https://mongoosejs.com/docs/validation.html#validation-errors
      res.status(400).json({
        message: error.errors
      });
      return;
    }

    // 4. Validation ok, let save it
    req.user.save(function (err) {
      if (err) {
        res.status(500).json({
          message: "Error while saving user into DB."
        });
        return;
      }
      console.log("req.user");
      console.log(req.user);

      res.status(200).json(req.user);
    });
  });
});


//LOGOUT
router.post('/logout', (req, res, next) => {
  // req.logout() is defined by passport
  req.logout();
  res.status(200).json({
    message: 'Log out success!'
  });
});

//LOGGED IN
router.get('/loggedin', (req, res, next) => {
  // req.isAuthenticated() is defined by passport
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }
  res.status(403).json({
    message: 'Unauthorized'
  });
});

module.exports = router;