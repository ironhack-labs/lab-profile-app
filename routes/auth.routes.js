const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth.controller');
const uploadCloud = require('../configs/storage.config.js');
const secure = require('../middlewares/secure')

router.post('/register', auth.register);
router.post('/authenticate', auth.authenticate);
router.get('/logout', secure.isAuthenticated, auth.logout);
router.get('/profile', secure.isAuthenticated, auth.getProfile);
router.put('/profile',secure.isAuthenticated,uploadCloud.single('imageUrl'), auth.editProfile);

module.exports = router