const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require("../models/User.model")
const GoogleStrategy = require('passport-google-oauth20').Strategy 



passport.serializeUser((user,callback)=>{
    callback(null,user._id)
});

passport.deserializeUser(async (id,callback)=>{
    try{
        const user = await  User.findById(id)
        callback(null,user)
    }catch(error){
        console.log("hubo un error deserializeUser")
        callback(error,null)
    }
});


passport.use(
    new LocalStrategy(
        {
            usernameField: "email" //usernameField:"username"
        },
        async (email, password, callback)=>{
            try{
                const user = await User.findOne({ email})
                if(!user){
                    return callback(null,false,{msg:"Incorrect email or ..."})
                }
                if(!bcrypt.compareSync(password,user.password)){
                    return callback(null,false,{msg:"Incorrect passowr or  ..."})
                }
                callback(null,user)

            }catch(error){
                callback(error,null)
            }
        }
    )
);


passport.use(
    new GoogleStrategy({
            clientID: process.env.GOOGLE_KEY,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK,
    },                                      //callback = cb
    async (accessToken, refreshToken,profile,cb)=>{
        try{
        console.log("PROFILE",profile)
        
        const user = await User.findOne({ googleID: profile.id })

          
        if(user){
                return cb(null,user)//esto valida que el usuario ya este registrado
            }
                
            const newUser = await User.create({
                googleID: profile.id,
                email: profile.emails[0].value,
                avatar: profile.photos[0].value,
            })
            return cb(null,newUser)

        }catch(error){
            return cb(error,null)
        }
    }
  )
)



module.exports  = passport