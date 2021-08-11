require('dotenv').config(); //Import dotenv
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//Lo que necesitamos:
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const passport = require('./helpers/passport')

mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error("Error connecting to mongo", err)
  })


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//CORS:
app.use(
    cors({
      origin: ["http://localhost:3001","http://localhost:3000"],
      credentials: true,
    })
  );

  //SESSION:
app.use(
    session({
        secret : process.env.SECRET,
        saveUninitialized: true,
        resave: true
    })
)


//Iinicializar Passport Helper
app.use(passport.initialize())
app.use(passport.session())


//Rutas:
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');

app.use('/api', indexRouter);
app.use('/api/auth', authRouter);

module.exports = app;
