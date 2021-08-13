require('dotenv').config()
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const mongoose = require('mongoose');
const cors = require('cors');
const session = require("express-session");
const passport = require('./helpers/passport');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');

mongoose.connect(process.env.DB, {
    useUnifiedTopology: true,
    useNewUrlParser:true
})
.then((x)=>{
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
})
.catch((error)=>{
    console.log("Error connecting to mongo", error)
});

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//CORS
app.use(cors({
    origin:["http://localhost:3000", "http://www.mipagina.com"], credentials: true
}))

//session de passport
app.use(
    session({
        secret:process.env.SECRET,
        saveUninitialized:true,
        resave:true
    })
)

app.use(passport.initialize())
app.use(passport.session())

app.use('/api', indexRouter);
app.use('/api/users', usersRouter);

app.use('/api/auth',authRouter);

module.exports = app;