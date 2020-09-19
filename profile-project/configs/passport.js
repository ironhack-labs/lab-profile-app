const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const { compareSync } = require("bcrypt")
const User = require("../models/User.model")


//#region Estrategia Local

passport.use(
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password"
      },
      async (username, password, done) => {
        try {
          const user = await User.findOne({ username })
  
          if (!user) return done(null, false, { message: "Error, intenta de nuevo" })
  
          if (!compareSync(password, user.password))
            return done(null, false, { message: "Password incorrecto" })
  
          done(null, user)
        } catch (error) {
  
          console.error(error)
  
          done(error)
        }
      }
    )
  )
  
//#endregion 


//#region Serializer y Deserializer

passport.serializeUser((user, done) => {
    done(null, user._id)
  })
  
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id)
      user.password = "";
      done(null, user )
    } catch (error) {
      done(error)
    }
  })
  
  //#endregion
  
  module.exports = passport