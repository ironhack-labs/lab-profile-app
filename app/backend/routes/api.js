const router = require('express').Router()
const passport = require('../config/passport')
// Controllers
const { registerNewUser, logInUser, logOutUser, editUser } = require('../controllers/auth')

/***************************/
/********** AUTH ***********/
/***************************/
router.post('/login', passport.authenticate('local'), logInUser)
router.post('/signup', registerNewUser)
router.put('/edit/:id', editUser)
router.get('/logout', logOutUser)

module.exports = router
