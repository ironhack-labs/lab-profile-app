const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User");
const uploadCloud = require("../multer/cloudinary.js");
// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

let loginPromise = (req, user) => {
  return new Promise((resolve, reject) => {
    req.login(user, e => (e ? reject(e) : resolve(user)));
  });
};

router.post("/login", (req, res, next) => {
  req.body = req.body.username;
  passport.authenticate("local", (err, theUser, failureDetails) => {
    if (err) return res.status(500).json({ message: "Something went wrong" });
    if (!theUser) return res.status(401).json(failureDetails);
    loginPromise(req, theUser)
      .then(() => res.status(200).json(req.user))
      .catch(e => res.status(500).json({ message: e.message }));
  })(req, res, next);
});

router.post("/image", uploadCloud.single("photo"), (req, res, next) => {
  res.json(req.file);
});

router.post("/signup", (req, res, next) => {
  const { username, password, campus, course } = req.body;
  let { image } = req.body;
  if (username === "" || password === "") {
    res.render("auth/signup", { message: "Indicate username and password" });
    return;
  }
  if (image === "") {
    image =
      "http://www.jdevoto.cl/web/wp-content/uploads/2018/04/default-user-img.jpg";
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
        res.json({ user });
      })
      .catch(err => {
        res.json({ message: "Something went wrong" });
      });
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.json({ message: "logged out" });
});

router.get("/currentuser", (req, res) => {
  const { user } = req;
  if (user) {
    res.json({ user });
  } else {
    res.json({user:null});
  }
});
module.exports = router;
