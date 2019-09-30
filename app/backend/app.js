require('dotenv').config()

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const favicon = require('serve-favicon')
const mongoose = require('mongoose')
const logger = require('morgan')
const path = require('path')
/***************************/
/********* IMPORTS *********/
/***************************/
const passport = require('./config/passport')
const session = require('express-session')
const cors = require('cors')

mongoose
  .connect('mongodb://localhost/firstmern', { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  })

const app_name = require('./package.json').name
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`)

const app = express()

/***************************/
/********* CONFIG **********/
/***************************/
// CORS
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3001', 'http://192.168.18.148:3001']
  })
)
// Passport
app.use(
  session({
    secret: 'lolol',
    cookie: { maxAge: 1000 * 60 * 60 }
  })
)

app.use(passport.initialize())
app.use(passport.session())

// Middleware Setup
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// Express View engine setup

app.use(
  require('node-sass-middleware')({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    sourceMap: true
  })
)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')))

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator'

/***************************/
/********* ROUTES **********/
/***************************/
app.use('/auth', require('./routes/api'))

module.exports = app
