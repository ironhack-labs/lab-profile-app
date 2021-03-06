require("dotenv").config();

const session = require("express-session");
const { mainModule } = require("process");
const MongoStore = require("connect-mongo").default;

const {SESSION_SECRET, MONGODB_URL} = process.env;

module.exports= (app) => {
    app.use(
        session({
            secret: SESSION_SECRET,
            resave: false,
            saveUninitialized:true,
            cookie: {maxAge: 6000},
            store: MongoStore.create({
                mongoUrl: MONGODB_URL,
                ttl: 60 * 60 * 24,
            })
        })
    )
}