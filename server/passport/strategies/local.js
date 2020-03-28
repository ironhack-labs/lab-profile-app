const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../../models/user");
const { checkPassword } = require("../../lib/hashing");

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const registeredUser = await User.findOne({ username });
      if (
        !registeredUser ||
        !checkPassword(password, registeredUser.password)
      ) {
        console.log("Invalid credentials");
        return done(null, false, { message: "Wrong user or password!" });
      } else {
        console.log(`${registeredUser.username} just logged in`);
        return done(null, registeredUser);
      }
    } catch (error) {
      return done(error);
    }
  })
);