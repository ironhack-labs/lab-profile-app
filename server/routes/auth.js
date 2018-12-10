const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;




router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return res.status(500).json({message: "Authentication error" }) }
    if (!user) { return res.status(500).json({message: "Indicate username doesnt exist" }) }
    req.logIn(user, function(err) {
      if (err) { return res.status(500).json({message: "Authentication error"}) }
      return res.status(200).json({user});
    });
  })(req, res, next);
});



router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const campus = req.body.campus;
  const course = req.body.course;

  if (username === "" || password === "") {
    res.status(500).json({ message: "Indicate username and password" });
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    console.log(err)
    if (user !== null) {
      res.status(403).json({ message: "The username already exists" });
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

    newUser.save()
    .then((user) => {
      res.status(200).json({user});
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: "Something went wrong" });
    })
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.json({ message: "Logout" });
  
});




router.get("/loggedIn", (req, res) => {
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
}
res.status(403).json({ message: 'Unauthorized' });
})

router.post("/edit", (req, res) => {
  const {username,campus,course} = req.body;
  User.findByIdAndUpdate(req.user._id, {username , campus , course }, {new: true})
  .then((user)=>{
    res.status(200).json({user})
  }).catch((err)=>{
    res.status(403).json({ message: 'Something went wrong' });
  })
})

module.exports = router;
