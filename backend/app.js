require('dotenv').config();

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors');
const passport = require('./config/passport');

const routes = require('./routes/');

const { isLoggedIn } = require('./middleware');

const app = express();

app.use(
  session({
    cookie: {
      maxAge: 1000 * 60 * 60 * 24
    },
    secret: process.env.SECRET
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(res => {
    console.log(`Connected to Mongo! Database name: "${res.connections[0].name}"`);
  })
  .catch(err => console.error('Error connecting to mongo', err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3001']
  })
);

app.use('/api/auth', routes);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    message: err.message
  });
});

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server is up on http://localhost:${process.env.PORT}`);
});
