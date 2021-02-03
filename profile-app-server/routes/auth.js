const { Router } = require('express');
const { catchErrors } = require('../middlewares');
const {
  signupProcess,
  loginProcess,
  logoutProcess,
  getCurrentUser,
  googleInit,
  googleCallback,
  uploadProcess
} = require('../controllers/auth.controllers');
const uploadCloud = require('../config/cloudinary');

const router = Router();

router.post('/signup', catchErrors(signupProcess));

router.post('/login', loginProcess);

router.get('/logout', logoutProcess);

router.get('/loggedin', getCurrentUser);

router.patch('/upload', uploadCloud.single('photo'), uploadProcess);

router.get('/google', googleInit);
router.get('/google/callback', googleCallback);


module.exports = router;

