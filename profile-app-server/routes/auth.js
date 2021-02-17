const { Router } = require('express');
const { catchErrors } = require('../middlewares');
const {
  signupProcess,
  loginProcess,
  logoutProcess,
  getCurrentUser,
  googleInit,
  googleCallback,
  uploadProcess,
} = require('../controllers/auth.controllers');
const uploader = require('../config/cloudinary');

const router = Router();

router.post('/signup', catchErrors(signupProcess));

router.post('/login', loginProcess);

router.get('/logout', logoutProcess);

router.get('/loggedin', getCurrentUser);

router.post('/upload', uploader.single('image'), catchErrors(uploadProcess));

router.get('/google', googleInit);
router.get('/google/callback', googleCallback);

// router.post('/upload', uploader.single('image'), (req, res) => {
//   // res.status(201).json(req);
//   console.log(req)
// });

module.exports = router;
