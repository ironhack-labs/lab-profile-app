const express = require('express');
const router  = express.Router();
const passport = require('passport')
const {signup, logout, loggedIn, upload, edit} = require('../controllers')


router.post('/auth/login', passport.authenticate())
router.post('/auth/signup', signup)

router.get('/auth/loggedIn', loggedIn)
router.get('/auth/logout', logout)

router.post('/auth/edit', edit)

router.post('/auth/upload', upload)

module.exports = router;
