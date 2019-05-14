const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("../handlers/passport");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.post("/signup", (req, res, next) => {
  console.log(req.body);
  User.register(req.body, req.body.password)
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json(err));
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, infoErr) => {
    if (err) return res.status(500).json({ err, infoErr });
    if (!user) return res.status(500).json({ msg: "This user does not exist" });
    req.logIn(user, err => {
      if (err) return res.status(500).json(err);
      res.status(200).json(user);
    });
  })(req, res, next);
});

router.get("/loggedin", (req, res, next) => {
  res.status(200).json({ msg: "User logged" });
});

function isLogged(req, res, next) {
  if (!req.isAutenticated())
    return res.status(401).json({ msg: "You are not autenticated" });
  next();
}

module.exports = router;
