const passport = require("passport");
const User = require("../models/user");

//Require strategies
require("./strategies/local");

// Serialize and Deserialize
passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

passport.deserializeUser((id, cb) => {
  console.log("deserializing user");
  User.findById(id)
    .then(user => cb(null, user))
    .catch(e => cb(err));
});

module.exports = app => {
  app.use(passport.initialize());
  app.use(passport.session());
};