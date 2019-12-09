const router = require("express").Router();
const passport = require("passport");
const catchErrors = require("../middlewares/catchErrors");
const User = require("../models/User");


const {
  signup,
  login,
  logout,
  profile
 } = require("../controllers/authController");

 const { isLoggedIn, isNotLoggedIn, isConnected} = require('../middlewares/auth.middleware');

 //middlewares

 router.get("/login", login);
 router.post("/login", passport.authenticate("local"), login);

 router.get("/signup", isConnected,signupGet);
 router.post("/signup", signup);

 router.get("/profile", isLogged ,profile);

 router.get("/logout", logout);

 module.export = router;