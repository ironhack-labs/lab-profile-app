const passport = require("passport");
const User = require("../models/User");
console.log("PASSPORT");
require("./strategies/local");

passport.serializeUser((user, cb) => {
  console.log("SERIALIZE");
  cb(null, user._id);
});

passport.deserializeUser((id, cb) => {
  console.log("DESERIALIZE USER");
  User.findById(id)
    .then(user => cb(null, user))
    .catch(e => cb(e));
});

module.exports = app => {
  app.use(passport.initialize());
  app.use(passport.session());
};
