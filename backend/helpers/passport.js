const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

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
            usernameField: "email"
        },
        async(email, password, callback) => {
            try{
                const user = await User.findOne({email})
                if(!user){
                    return callback(null, false, {msg: "Incorrect Email or ..."})
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

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_KEY,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK,
        },                                        //cb = Callback
        async (accessToken, refreshToken, profile, cb) => {
            console.log("PROFILE :", profile)
            try{
                            //Verificar si hay un googleID registrado
            const user = await User.findOne({ googleID : profile.id})
                //Si ya está registrado:
                if(user){
                    return cb(null, user)
                }

                //Si no tiene usuario:
                const newUser = await User.create({
                    googleID: profile.id,
                    email: profile.emails[0].value,
                    avatar: profile.photos[0].value,
                })
                return cb(null, newUser)

            }catch(error){
                return cb(error, null)
            }
        }
    )
);


module.exports = passport