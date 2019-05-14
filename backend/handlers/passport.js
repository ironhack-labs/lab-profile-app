const passport = require('passport');
const User = require('../models/User');

passport.user(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser())

module.exports = passport

/* programar passport?????  */