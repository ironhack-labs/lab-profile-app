require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const hbs = require('hbs');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');



const session = require('express-session');
const passport = require('passport');
require('./configs/passport');

mongoose
  .connect('mongodb://localhost/lab-profile-app', { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));


app.use(session({
  secret: process.env.SESS_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 6000000 }
}))


app.use(passport.initialize());
app.use(passport.session());
// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000', 'http://localhost:3001'] // <== aceptar llamadas desde este dominio
  })
);

const index = require('./routes/index');
const authRoutes = require('./routes/auth');
app.use('/', index);
app.use('/api', authRoutes);

module.exports = app;
