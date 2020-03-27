const passport = require("passport");
const User = require("../../models/User");
const LocalStrategy = require("passport-local").Strategy;
const { checkHashed } = require("../hashing");

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const foundUser = await User.findOne({ username });
      console.log(foundUser);
      if (foundUser) {
        checkHashed(password, foundUser.password) ? done(null, foundUser) : done(null, false);
      } else {
        done(null, false);
      }
    } catch (error) {
      done(error);
    }
  })
);
