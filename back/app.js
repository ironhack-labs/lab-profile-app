require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const mongoose     = require('mongoose');
const session = require("express-session");
const logger       = require('morgan');
const path         = require('path');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors')


mongoose
  .connect('mongodb://localhost/lab-profile-app', {useNewUrlParser: true})
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


app.use(session({
  secret: 'irongenerator',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}))

app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true
}))

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));


// default value for title local
app.locals.title = 'Lab profile app';

require('./configs/passport')(app);

const index = require('./routes/index');
const auth = require('./routes/auth');
app.use('/', index);
app.use('/auth', auth);


module.exports = app;
