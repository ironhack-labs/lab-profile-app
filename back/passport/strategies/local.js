const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../../models/User");
const { hashPassword, checkHashed } = require("../../lib/hashing");

passport.use(
  new LocalStrategy(async (username, password, done) => {
    console.log(username, password);
    try {
      const registeredUser = await User.findOne({ username });
      console.log("found user", registeredUser);
      if (!registeredUser || !checkHashed(password, registeredUser.password)) {
        console.log("Invalid credentials");
        return done(null, false, { message: "Invalid credentials" });
      } else {
        console.log(`${registeredUser.username} just logged in`);
        return done(null, registeredUser);
      }
    } catch (error) {
      console.log("Signup failed", error);
      done(error);
    }
  })
);
