const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('../models/User');
const bcrypt = require('bcrypt');

passport.serializeUser((user, callback) => {
  callback(null, user_id);
});

passport.deserializeUser(async (id, callback) => {
  const user = await User.findById(id);
  callback(null, user);
});

passport.use(
  new localStrategy(
    { usernameField: 'name' },
    async (email, password, callback) => {
      const user = await User.findOne({ email });
      if (!user) {
        return callback(null, false, { message: 'Incorrect email' });
      }
      if (!bcrypt.compareSync(password, user.password)) {
        return callback(null, false, { message: 'Incorrect password' });
      }
      callback(null, user);
    }
  )
);

module.exports = passport;
