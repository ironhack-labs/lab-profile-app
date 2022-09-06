const session = require('express-session');
const MongoStore = require("connect-mongo")(session);
const mongoose = require('mongoose');

module.exports = session({
  secret: process.env.COOKIE_SECRET || 'SuperSecret - (Change it)',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 1000
  },
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60
  })
});
