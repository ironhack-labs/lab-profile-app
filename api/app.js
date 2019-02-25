require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');

require('./configs/passport');


mongoose
  .connect('mongodb://localhost/api', {
    useNewUrlParser: true
  })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

app.use(session({
  secret: "some secret goes here",
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000'] // <== this will be the URL of our React app (it will be running on port 3000)
}));

const index = require('./routes/index');
app.use('/', index);
const authRoutes = require('./routes/auth-routes');
app.use('/api', authRoutes);


module.exports = app;
