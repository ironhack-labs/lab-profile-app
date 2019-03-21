require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const hbs = require('hbs');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');

const session = require("express-session");
const MongoStore = require('connect-mongo')(session);
const flash = require("connect-flash");


mongoose
  .connect('mongodb://localhost/profileapp', {
    useNewUrlParser: true
  })
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
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));


app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));



// Enable authentication using session + passport
app.use(session({
  secret: 'some secret goes here',
  resave: true,
  saveUninitialized: true
}))
app.use(flash());
require('./passport')(app);

// // USE passport.initialize() and passport.session() HERE:
// app.use(passport.initialize());
// app.use(passport.session());

// ADD CORS SETTINGS HERE TO ALLOW CROSS-ORIGIN INTERACTION: INDISPENSABLE POUR LES REQUETES COTE CLIENT
const cors = require('cors');
app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000'] // <== this will be the URL of our React app (it will be running on port 3000)
}));


const index = require('./routes/index');
app.use('/', index);

const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);


module.exports = app;