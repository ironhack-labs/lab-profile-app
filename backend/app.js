require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const hbs = require('hbs');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const passport = require('./config/passport');
const session = require('express-session');
const cors = require('cors');

mongoose
  .connect('mongodb://localhost/lab-profile-app', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mondongo! Database name: "${x.connections[0].name}"`);
  })
  .catch(err => {
    console.error('Error connecting to mondongo', err);
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();
//Config session
app.use(
  session({
    secret: process.env.SECRET,
    cookie: {maxAge: 1000 * 60 * 60}
  })
);

//Config passport
app.use(passport.initialize());
app.use(passport.session());

//Config cors
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3001']
  })
);

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// Express View engine setup

app.use(
  require('node-sass-middleware')({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    sourceMap: true
  })
);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// default value for title local
app.locals.title = 'Lab-profile-app';

const index = require('./routes/index');
app.use('/api', index);

module.exports = app;
