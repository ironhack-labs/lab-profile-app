const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User");
const uploadCloud = require("../multer/cloudinary.js");
// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    if (err) return res.status(500).json({ message: "Something went wrong" });
    if (user) return res.status(401).json(failureDetails);
    res.status(200).json(req.user);
  })(req, res, next);
});

router.post("/image",uploadCloud.single("photo"),(req, res, next) => {
  console.log(req.file)
  res.json(req.file)

})

router.post("/signup",(req, res, next) => {
  
  const { username, password, campus, course,image} = req.body;
  if (username === "" || password === "") {
    res.render("auth/signup", { message: "Indicate username and password" });
    return;
  }
  if(image===""){
    image="http://www.jdevoto.cl/web/wp-content/uploads/2018/04/default-user-img.jpg"
  }
  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.render("auth/signup", { message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    User.create({
      username,
      password: hashPass,
      campus,
      course,
      image
    })
      .then(user => {
        console.log(user);
        res.json({ user });
      })
      .catch(err => {
        res.json({ message: "Something went wrong" });
      });
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
