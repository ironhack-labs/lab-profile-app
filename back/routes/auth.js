const express = require('express')
const router = express.Router()

const { loginProcess, signupProcess, uploadProcess, editProcess, logoutProcess, currentUser } = require('../controllers/auth');

router.post('/signup', signupProcess)
router.post('/login', loginProcess)
router.post('/upload', uploadProcess)
router.post('/edit', editProcess)
router.post('/logout', logoutProcess)
router.get('/current-user', currentUser)

module.exports = router;


