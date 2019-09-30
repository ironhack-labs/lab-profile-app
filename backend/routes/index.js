const router = require('express').Router();
const passport = require('../handlers/passport');
const { createUser, editUser, userLogin, userLogout, getUser } = require('../controllers/index.controllers');
const { catchErrors } = require('../middlewares/CatchErrors');
const { isLoggedIn } = require ('../middlewares/IsLoggedIn')

router.post('/login', passport.authenticate('local'), userLogin);
router.post('/signup', catchErrors(createUser));
router.post('/edit', isLoggedIn, catchErrors(editUser));
router.get('/logout', isLoggedIn, userLogout);
router.get('/loggedin', isLoggedIn, catchErrors(editUser));

module.exports = router;