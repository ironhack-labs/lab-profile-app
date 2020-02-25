const { Router } = require("express");
const passport = require("../config/passport");
const uploadConfig = require("../config/cloudinary");
const {isAuth}=require("../middlewares/auth")


const {
  login,
  signup,
  upload,
  edit,
  logout,
  loggedin
} = require("../controllers/auth");
const router = Router();

router
.post("/login",passport.authenticate("local"),login)
.post("/signup",signup)
.post("/upload",uploadConfig.single("photoURL"),upload)
.post("/edit",edit)
.get("/logout",logout)
.get("/loggedin",isAuth,loggedin)

module.exports = router;