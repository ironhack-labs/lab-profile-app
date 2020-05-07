const express = require('express');
const router = express.Router();

const authControllers = require('./controllers/auth.controllers');

const uploader = require('../config/cloudinary')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post('/login', authControllers.login);

router.post('/signup', authControllers.signup);

router.get('/logout', authControllers.logout);

router.patch('/edit', authControllers.edit);

router.get('/loggedin', authControllers.loggedin);

router.get('/users', authControllers.getUsers);

router.patch('/upload', uploader.single('image'), authControllers.upload);

module.exports = router;

