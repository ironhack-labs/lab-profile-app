require("dotenv").config();
const session = require("express-session");


const { SESSION_SECRET, MONGODB_URI } = process.env;

module.exports = (app) => {
  app.use(
    session({
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge: 60000 },
  
    })
  );
};

