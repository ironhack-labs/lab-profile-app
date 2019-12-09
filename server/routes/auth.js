const router = require("express").Router();
const passport = require("passport");
const catchErrors = require("../middlewares/catchErrors");


const {
  signup,
  login,
  logout,
  profile
 } = require("../controllers/authController");


 //middlewares


 router.post("/login", passport.authenticate("local"), login);

 router.post("/signup", signup);

 router.get("/profile", profile);

 router.get("/logout", logout);

 module.export = router;