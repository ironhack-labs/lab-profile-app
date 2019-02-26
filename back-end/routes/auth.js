const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");



router.get('/loggedin', (req, res, next) => {
  if (req.user) {
    res.json(200,req.user);
  } else {
    res.json(500, {message: "Not Logged in"})
  }
})

router.post("/login", (req, res) => {
  passport.authenticate("local", (err, user, failureDetails) => {
    if (err) res.json(500, { message: 'Error in the authentication' })
    if (!user) res.json(500, { message: failureDetails })
    else {
      req.login(user, (err) => {
        if (err) res.json(500, { message: 'Error in the authentication' });
        else {
          res.json(200, { message: "Ok" });
        }
      })
    }
  })
});

router.post("/signup", (req, res) => {
  const { username, password } = req.body;

  if (username === "" || password === "") {
    res.json(500, { message: "Error Fields aren't Filled" })
  }
  else {
    User.findOne({ username }, "username", (err, user) => {
      if (user !== null) {
        res.json(500, { message: "The username already exists" });
      } else {
        const newUser = new User ({
          username,
          password: bcrypt.hashSync(password, bcrypt.genSaltSync(10))
        })
          newUser.save()
          .then(() => res.json(200, { message: "Ok" }))
          .catch(err => {
            res.json(500, { message: err + "Something went wrong" });
          })
      }
    });
  }
});

router.put("/edit", (req, res) => {
  User.findByIdAndUpdate(id, { name, password })
    .then(res.json(200, { message: "User sucessfully updated" }))
    .catch(err => res.json(500, {message: err }))
})

router.get("/logout", (req, res) => {
  req.logout();
  res.json(200, {message: "Ok"});
});

module.exports = router;
