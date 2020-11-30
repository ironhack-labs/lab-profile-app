require('dotenv').config()

const bodyParser   = require('body-parser');
const express      = require('express');
const mongoose = require('mongoose')
const path         = require('path');
const favicon      = require('serve-favicon');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');

const passport =require('passport')

const session = require("express-session");
const MongoStore = require('connect-mongo')(session);
const flash = require("connect-flash");
const cors = require('cors')

mongoose
  .connect('mongodb://localhost/server', { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });



const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('./config/session')(app)
app.use(flash());
app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true
}))
app.use(passport.initialize())
app.use(passport.session())


const index = require('./routes/index');
const auth=require('./routes/auth')


app.use('/', index);
app.use('/auth', auth);
// 

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
