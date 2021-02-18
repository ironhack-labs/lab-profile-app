require("dotenv").config()

const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const express = require("express")
const mongoose = require("mongoose")
const logger = require("morgan")
const session = require("express-session")
const passport = require("./config/passport")


mongoose
  .connect("mongodb://localhost/server", { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error("Error connecting to mongo", err)
  })

  const app = express()

// Middleware Setup
app.use(logger("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
// app.use(
//   cors({
//     origin: ["http://localhost:3000"],
//     credentials: true
//   })
// )
app.use(
  session({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: true
  })
)

// INvocacion del middleware de forma global
// app.use(mandarATodosAComer)

app.use(passport.initialize())
app.use(passport.session())


const index = require("./routes/index")
app.use("/", index)
// invocacion del middleware de forma grupal (para todas las rutas de un archivo)
app.use("/auth", /*mandarATodosAComer*/ require("./routes/auth"))

module.exports = app

// function mandarATodosAComer(req, res, next) {
//   console.log("Vamonos a comerrrrr")

//   next()
// }
