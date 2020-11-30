const express = require("express");
const passport = require('passport');
const router = express.Router();
const Post = require("../models/Post")
const User = require("../models/User.model");
const { signup, login, logout, currentUser } = require('../Controllers/AuthControl')


router.post("/login", login);


router.post("/signup", signup);

router.get('/current-user', currentUser)

router.get("/logout", logout);

module.exports = router;