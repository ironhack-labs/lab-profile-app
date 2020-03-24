const passport = require("passport");

const User = require("../../models/User");
const {
  hashPassword,
  checkHashedPassword
} = require("../../lib/hash-password");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(
    { passReqToCallback: true },
    async (req, userCredentials, password, done) => {
      try {
        const user = await User.findOne({
          $or: [{ username: userCredentials }, { email: userCredentials }]
        });

        user
          ? checkHashedPassword(password, user.password)
            ? done(null, user)
            : done(null, false)
          : done(null, false);
      } catch (error) {
        done(error);
      }
    }
  )
);
