const express = require("express");
const authRoutes = express.Router();
const passport = require("passport");
const bcrypt = require("bcryptjs");
const uploader = require('../configs/cloudinary'); //IMG REQUIRE
const User = require("../models/user");



authRoutes.post("/auth/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const campus = req.body.campus;
  const course = req.body.course;
  // const imageUrl = req.body.imageUrl,

  if (!username || !password) {
    console.log('Provide username and password')
    res.status(400).json({message: "Provide username and password" });
    return;
  }

  if (password.length < 3) {
    console.log('Please make your password at least 4 characters long for security purposes')
    res.status(400).json({
      message:
        "Please make your password at least 4 characters long for security purposes.",
    });
    return;
  }

  User.findOne({ username }, (err, foundUser) => {
    if (err) {
      console.log('Username check went bad.')
      res.status(500).json({ message: "Username check went bad." });
      return;
    }

    if (foundUser) {
      console.log('Username taken. Choose another one.')
      res.status(400).json({ message: "Username taken. Choose another one." });
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const aNewUser = new User({
      username: username,
      password: hashPass,
      campus: campus,
      course: course,
      imageUrl: imageUrl, 
    });

    aNewUser.save((err) => {
      if (err) {
        console.log('Saving user to database went wrong.')
        res
          .status(500)
          .json({ message: "Saving user to database went wrong." });
        return;
      }
console.log('user created')
      // Automatically log in user after sign up
      // .login() here is actually predefined passport method
      req.login(aNewUser, (err) => {
        if (err) {
          console.log('Login after signup went bad.')
          res.status(500).json({ message: "Login after signup went bad." });
          return;
        }

        // Send the user's information to the frontend
        // We can use also: res.status(200).json(req.user);
        res.status(200).json(aNewUser);
      });
    });
  });
});

authRoutes.post("/auth/login", (req, res, next) => {
  passport.authenticate("local", (err, theUser, failureDetails) => {
    if (err) {
      console.log('Something went wrong authenticating user')
      res
        .status(500)
        .json({ message: "Something went wrong authenticating user" });
      return;
    }

    if (!theUser) {
      console.log(failureDetails)
      // "failureDetails" contains the error messages
      // from our logic in "LocalStrategy" { message: '...' }.
      res.status(401).json(failureDetails);
      return;
    }

    // save user in session
    req.login(theUser, (err) => {
      if (err) {
        console.log("Session save went bad.")
        res.status(500).json({ message: "Session save went bad." });
        return;
      }

      // We are now logged in (that's why we can also send req.user)
      console.log('login')
      res.status(200).json(theUser);
    });
  })(req, res, next);
});


authRoutes.get("/auth/logout", (req, res, next) => {
  // req.logout() is defined by passport
  req.logout();
  res.status(200).json({ message: "Log out success!" });
});

authRoutes.get("/auth/loggedin", (req, res, next) => {
  // req.isAuthenticated() is defined by passport
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }
  res.status(403).json({ message: "Unauthorized" });
});



  //IMG ROUTE
  authRoutes.post('/auth/upload', uploader.single("imageUrl"), (req, res, next) => {
    console.log('file is: ', req.file)
 
    if (!req.file) {
      next(new Error('No file uploaded!'));
      return;
    }
   console.log(req.body)
    User.findOneAndUpdate({username: req.body.username}, {imageUrl: req.file.secure_url})
    .then((user) => {
      res.json({
        message: `User is updated successfully.`,
      });
    })
    .catch((err) => {
      res.json(err);
    });

    res.json({ secure_url: req.file.secure_url });

})
 

  module.exports = authRoutes;
