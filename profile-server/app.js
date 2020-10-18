require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const session = require('express-session');
const MongoStore = require("connect-mongo")(session);
const passport = require('passport');
const cors = require('cors');

require('./configs/passport');

mongoose
  .connect('mongodb://localhost/profile-app', { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


// Session config
app.use(session({
  secret: "some secret goes here",
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
}));

// Passport config
app.use(passport.initialize());
app.use(passport.session());

// Default value for title local
app.locals.title = 'Auth app';

// Cors settings to allow cross-origin interaction
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000'] // URL of React app 
  })
);


// Routes middleware:
app.use('/api', require('./routes/auth.routes'));
app.use('/', require('./routes/index'));

module.exports = app;
