const express = require('express');
const router  = express.Router();
const {indexView,
  signupView,
  loginView,
  profilePicture,
  profileView,
  loginProcess,
  signupProcessUser,
  logout,
  editProfile,
  deleteProfile} = require('../controllers/User.controllers')
const uploadPicture = require('../config/cloudinary')

/* GET home page */
router.get('/', indexView);
router.get('/signup', signupView);
router.post('/signup', signupProcessUser)

router.get('/login', loginView)
router.post('/login', loginProcess)
router.get('/profile', profileView)
router.post('/profile-picture', uploadPicture.single('image'), profilePicture)
router.get('/logout', logout)
router.post('/editProfile',editProfile)
router.get('/deleteProfile',deleteProfile)

module.exports = router;
