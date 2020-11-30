const { Router } = require('express')
const passport= require('passport')
const router = Router()
const {loginUser, signupUser, uploadUser, editUser, logoutUser, loggedinUser} =require('../controllers/auth')

router.post('/login', loginUser)
router.post('/signup', signupUser)
router.post('/upload/:id', uploadUser)
router.post('/edit/:id', editUser)
router.post('/logout', logoutUser)
router.post('/loggedin', loggedinUser)


module.exports = router