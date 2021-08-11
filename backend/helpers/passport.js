const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');
//const GoogleStrategy = require('passport-google-oauth20').Strategy;

//Convertir a cadena:
passport.serializeUser((user, callback) => {
    callback(null, user._id)
})

//Convertir a objeto:
passport.deserializeUser( async (id, callback) => {
    try{
        const user = await User.findById(id)
        callback(null, user)
    }catch(error){
        console.log("Hay un problema con el deserializeUser")
        callback(error, null)
    }
});

//Passport strategy:

passport.use(
    new LocalStrategy(
        {
            usernameField: "username"
        },
        async(username, password, callback) => {
            try{
                const user = await User.findOne({username})
                if(!user){
                    return callback(null, false, {msg: "Incorrect Username or ..."})
                }

                if(!bcrypt.compareSync(password, user.password)){
                    return callback(null, false, {msg: "Incorrect Password or ..."})
                }
                callback(null, user)
            }catch(error){
                callback(error, null)
            }
        }
    )
);

//Google Strategy:

//PENDING

module.exports = passport