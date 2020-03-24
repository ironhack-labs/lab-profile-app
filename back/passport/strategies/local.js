const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("../../models/User.model");

const checkHashed = (a, b) => a == b;

passport.use(
  new LocalStrategy(async (username, password, done) => {
    console.log(username, password);
    try {
      const foundUser = await User.findOne({ username });
      if (foundUser) {
        checkHashed(password, foundUser.password)
          ? done(null, foundUser)
          : done(null, false);
      } else {
        done(null, false);
      }
    } catch (error) {
      console.log(error);
      done(error);
    }
  })
);
console.log("Installed Passport Local Strategy");
