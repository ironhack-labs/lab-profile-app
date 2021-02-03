const passport = require('passport')
const LocalStrategy = require('passport-local')
const GoogleStrategy = require('passport-google-oauth20')
const FacebookStrategy = require('passport-facebook')
const User = require("../models/User")
const bcrypt = require('bcrypt')

passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

passport.deserializeUser(async (id, cb) =>{
    try{
        const user = await User.findById(id)
        cb(null, user)
    } catch (err){
        console.log(err)
    }
});

passport.use(
    new LocalStrategy({
        usernameField: "username",
        passwordField: "password"
    },
    async (username, password, callback) => {
        try {
            const user = await User.findOne({username})
            if(!user) {
                return callback(null, false, {message: "Incorrect Username"})
            }
            if(!bcrypt.compareSync(password, user.password)) {
                return callback(null, false, {message: "Incorrect Password"})
            }
            callback(null, user)
        } catch (error) {
            console.log(error)
        }
    }
    )
)

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_KEY,
      clientSectret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK
    },
    async (_, __, profile, callback) => {
        console.log("PROFILE: ", profile)
      
        const user = await User.findOne({ googleID: profile.id });
        if (user) {
          return callback(null, user);
        }
        const newUser = await User.create({
            googleID: profile.id,
            username: profile.emails[0].value,
            image: profile.photos[0].value
        })
        return callback(null, newUser)
    }
  )
);

module.exports = passport;