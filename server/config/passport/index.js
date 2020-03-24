const passport = require('passport');
const User = require('../../models/User');

// require passport strategies
require('./localStrategy');

// serialize and deserialize user instances
passport.serializeUser((user, cb) => cb(null, user._id));

passport.deserializeUser((id, done) => {
  console.log('deserializing user');

  User.findById(id)
    .then(user => {
      done(null, user);
    })
    .catch(error => done(error));
});

module.exports = app => {
  app.use(passport.initialize());
  app.use(passport.session());
};
