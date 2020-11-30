const bcrypt = require("bcrypt")
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const User = require("../models/User")

passport.use(
    new LocalStrategy({
            usernameField: "username",
            passwordField: "password"
        },
        async(username, password, done) => {
            try {
                const user = await User.findOne({ username })
                if (!user) {
                    return done(null, false, { message: "Incorrect username" })
                }
                if (!bcrypt.compareSync(password, user.password)) {
                    return done(null, false, { message: "Incorrect password" })
                }
                done(null, user)
            } catch (err) {
                console.log(err)
            }
        }
    )
)

passport.serializeUser((user, cb) => {
    cb(null, user._id)
})

passport.deserializeUser(async(id, cb) => {
    try {
        const user = await User.findById(id)
        if (user) {
            user.password = null
        }
        cb(null, user)
    } catch (err) {
        console.log(err)
    }
})

module.exports = (app)  => {
    app.use(passport.initialize());
    app.use(passport.session());
  }