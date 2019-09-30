const router = require('express').Router();
const passport = require('./../config/passport');
const { createUser, editUser, loginUser, logoutUser, getUser } = require('./../controllers');
const { isLoggedIn, catchErrors } = require('./../middleware');

router.post('/login', passport.authenticate('local'), loginUser);
router.post('/signup', catchErrors(createUser));
router.post('/edit', isLoggedIn, catchErrors(editUser));
router.get('/logout', isLoggedIn, logoutUser);
router.get('/loggedin', isLoggedIn, catchErrors(editUser));

module.exports = router;