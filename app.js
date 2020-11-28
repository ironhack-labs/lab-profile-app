require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');

const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const passport = require('./config/passport');
const log = require('chalk-animation');
const flash = require('connect-flash');
const cors = require('cors');

mongoose
  .connect(process.env.DB || 'mongodb://localhost/lab-profile-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((x) => {
    log.rainbow(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err);
  });

const app_name = require('./package.json').name;
const debug = require('debug')(
  `${app_name}:${path.basename(__filename).split('.')[0]}`
);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(
  cors({
    origin: ['http://localhost:3001'],
    credentials: true,
  })
);
require('./config/session')(app);

const userRoutes = require('./routes/userRoutes');

app.use('/', userRoutes);

module.exports = app;

// app.listen(3000);
