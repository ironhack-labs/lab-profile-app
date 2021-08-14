const express = require('express');
const router = express.Router();
const uploader = require('../helpers/multer')

const {
    loginProcess,
    signupProcess,
    uploadProcess,
    editProcess,
    logoutProcess,
    confirmationCode,
    loggedInProcess,
    googleInit,
    googleCallback
} = require('../controllers/auth.controller')

router.post('/login', loginProcess);

router.post('/signup', signupProcess);

router.post('/upload', uploader.single("image"), uploadProcess);

router.post('/edit', editProcess);

router.post('/logout', logoutProcess);

router.get("/confirm/:confirmationCode",confirmationCode);

router.get('/logged-in', loggedInProcess);

router.get('/google', googleInit);

router.get('/google/callback', googleCallback);

module.exports = router;