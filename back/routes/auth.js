const express = require('express');
const router  = express.Router();
const {
    loginProcess,
    signupProcess,
    uploadProcess,
    editProcess,
    logoutProcess,
    loggedinProcess
} = require('../controllers/auth')

router.post('/login', loginProcess)
router.post('/signup', signupProcess)
router.post('/upload', uploadProcess)
router.post('/edit', editProcess)
router.post('/logout', logoutProcess)
router.get('/loggedin', loggedinProcess)

module.exports = router;