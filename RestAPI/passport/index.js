const passport = require('passport');

require('./serializers');
require('../passport/localStrategy');

module.exports = (app)  => {
  app.use(passport.initialize());
  app.use(passport.session());
}