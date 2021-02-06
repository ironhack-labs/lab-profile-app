const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/User');
const bcrypt = require('bcrypt');

passport.serializeUser((user, callback) => {
  callback(null, user._id);
});

passport.deserializeUser(async (id, callback) => {
  try {
    const user = await User.findById(id);
    callback(null, user);
  } catch (err) {
    console.error(err);
  }
});

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
    },
    async (email, password, callback) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return callback(null, false, { message: 'Incorrect Email' });
        }
        if (!bcrypt.compareSync(password, user.password)) {
          return callback(null, false, { message: 'Incorrect password' });
        }
        callback(null, user);
      } catch (error) {
        console.log(error);
      }
    }
  )
);
module.exports = passport;
