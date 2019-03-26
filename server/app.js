require('dotenv').config()

const bodyParser   = require('body-parser')
const cookieParser = require('cookie-parser')
const express      = require('express')
const favicon      = require('serve-favicon')
const hbs          = require('hbs')
const mongoose     = require('mongoose')
const logger       = require('morgan')
const path         = require('path')
const cors         = require("cors");
const session      = require("express-session")
const passport     = require('passport')
const MongoStore   = require('connect-mongo')(session)
const flash        = require("connect-flash")
      
require('./configs/passport')

mongoose
  .connect('mongodb://localhost/server', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`)

const app = express()

const whiteList = ["http://localhost:3000"]

const corsOptions = {
  credentials: true,
  origin: (origin, cb) => {
    const originIsWhitelisted = whiteList.includes(origin)
    cb(null, originIsWhitelisted)
  }
}

app.use(cors(corsOptions))

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}))    

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')))

hbs.registerHelper('ifUndefined', (value, options) => {
  if (arguments.length < 2)
      throw new Error("Handlebars Helper ifUndefined needs 1 parameter")
  if (typeof value !== undefined ) {
      return options.inverse(this)
  } else {
      return options.fn(this)
  }
})
  
app.locals.title = 'Express - Generated with IronGenerator'

app.use(session({
  secret:"eyyyy",
  resave: true,
  saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(flash())
require('./passport')(app)


const authRoutes = require('./routes/auth-routes')
app.use('/api', authRoutes)
      
module.exports = app  