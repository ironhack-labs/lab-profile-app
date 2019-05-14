const express = require("express");
const router = express.Router();
const user = require("../models/User");
const passport = require("../handlers/passport");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.post("/", (req, res, next) => {
  user.register(
    req.body,
    req.body.password
      .then(user => res.status(200).json(user))
      .catch(err => res.render(401).json(err))
  );
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, next) => {
    if (err) return res.status(500).json({ err, infoErr });
    if (!user) return res.status(401).json({ msg: "no existe" });
    req.logIn(user, err => {
      if (err) return res.status(500).json(err);
      res.status(200).json(user);
    });
  })(res, res, next);
});

router.get ("/private", isLogged,(req,res,next)=>{
  req.status(200).json ({msg: 'nice!'})
})

function isLogged(req,res,next) {
  if(!req.isAuthenticated()) return res.status (401).json({msg: "not logged"})
  next()
}

module.exports = router;
