const express = require("express");
const passport = require('passport');
const router = express.Router();

const { signup, login, logout, loggedIn, edit } = require('../controllers/auth')
// Bcrypt to encrypt passwords


router.post("/login", login);


router.post("/signup", signup);

router.get('/loggedIn', loggedIn)

router.get("/logout", logout);

router.post("/edit/:id", edit)

module.exports = router;
