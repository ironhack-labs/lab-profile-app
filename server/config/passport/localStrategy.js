const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../../models/User');

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const registeredUser = User.findOne({ username });
      if (!registeredUser || password !== registeredUser.password) {
        console.log('Invalid credentials');
        return done(null, false);
      } else {
        console.log(`${registeredUser.username} just logged in`);
        return done(null, registeredUser);
      }
    } catch (error) {
      console.log('Signup failed', error);
      done(error);
    }
  })
);
