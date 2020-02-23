const router= require('express').Router()
const passport=require('passport')
const {login,signup,upload,edit,logout,loggedin}=require('../controller/auth')
const uploadCloud= require('../config/cloudinary')

router.post('/login',passport.authenticate('local'),login)
    .post('/signup',signup)
    .post('/upload',isAuth,uploadCloud.single('image'),upload)
    .post('/edit',isAuth,edit)
    .post('logout',logout)
    .get('/loggedin',isAuth,loggedin)

function isAuth(req, res, next) {
      req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' })
    }
      
module.exports=router