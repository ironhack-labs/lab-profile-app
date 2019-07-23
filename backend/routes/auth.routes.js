const router = require('express').Router();
const passport = require("../config/Passport");
const { postLogin, postSignup, getLogout, getLoggedIn, postEdit, postUpload } = require("../controllers/auth.controllers");
const { verifyToken } = require("../config/jwt");
const uploadCloud = require('../config/cloudinary')

router.post('/login', passport.authenticate('local'), postLogin)
router.post('/signup', postSignup)
router.post('/upload', verifyToken, uploadCloud.single('photo'), postUpload)
router.post('/edit', verifyToken, postEdit)
router.get('/logout', getLogout)
router.get('/loggedin', verifyToken, getLoggedIn)

module.exports = router;