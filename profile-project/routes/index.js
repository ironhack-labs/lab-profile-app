const express = require('express');
const router  = express.Router();
const User = require("../models/User.model")
const {
  getInitialIndex,
  postLogin, 
  postSignup,
  postUploadImage,
  postEditUser,
  postLogOut,
  getLoggedUser
} = require("../controllers/User")

const { catchErrors } = require("../middlewares/index")

/* GET home page */
router.get('/', getInitialIndex);

router.post("/auth/login", postLogin)

router.post("/auth/signup", postSignup)

router.post("/auth/upload", postUploadImage)

router.post("/auth/edit", postEditUser)

router.post("/auth/logout", postLogOut)

router.get("/auth/loggedin", getLoggedUser)



module.exports = router;
