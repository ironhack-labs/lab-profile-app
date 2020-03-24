const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../../models/User');

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const registeredUser = await User.findOne({ username });
      console.log('found user', registeredUser);
      if (!registeredUser || password !== registeredUser.password) {
        console.log('Invalid credentials');
        return done(null, false, { message: 'Invalid credentials' });
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
