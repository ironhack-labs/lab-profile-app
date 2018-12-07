require('dotenv').config();


const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const session    = require("express-session");
const MongoStore = require('connect-mongo')(session);
const cors = require("cors");
    

mongoose
  .connect(process.env.DBURL, {useNewUrlParser: true}) // SUSTITUYO para BD y pongo process.env.DBURL
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


require("./passport")(app) //REQUIERO PASSPORT


// Enable authentication using session + passport
app.use(session({
  secret: 'irongenerator',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore( { mongooseConnection: mongoose.connection })
}))

// requiero CORS , que autoriza hacer petis desde esa dirección y pongo PUERTO 5000
app.use(cors({
  credentials: true,
  origin: ['http://localhost:5000'],
}));
    

const index = require('./routes/index'); //desde aquí va a index y en index están todas las rutas
app.use('/', index);



module.exports = app;
