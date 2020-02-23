const passport=require('passport')
const User=require('../models/User')

passport.use(User.createStrategy()) //estrategia local

passport.serializeUser(User.serializeUser())//guarda en session al usuario loggeado
passport.deserializeUser(User.deserializeUser())//pone al usuario en req.user

module.exports=passport