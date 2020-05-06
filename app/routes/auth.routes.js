const express = require('express');
const router = express.Router();

const authControllers = require('./controllers/auth.controllers');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post('/login', authControllers.login);

router.post('/signup', authControllers.signup);

// router.post('/edit', authControllers.edit);

// router.get('/logout', authControllers.logout);

// router.get('/loggedin', authControllers.loggedin);

module.exports = router;


/**
 * /login
 * /sihnup
 * /edit
 * /logout
 * loggedin
 */