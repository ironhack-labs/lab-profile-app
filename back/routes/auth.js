const express = require('express');
const router = express.Router();
const {
  edit,
  loggedin,
  upload,
  login,
  signup,
  logout,
} = require('../controllers/Auth.controller');

router.post('/login', login);
router.post('/signup', signup);
router.post('/upload', upload);
router.post('/edit', edit);
router.post('/logout', logout);
router.get('/loggedin', loggedin);

module.exports = router;
