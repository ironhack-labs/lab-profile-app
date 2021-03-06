const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const origin = "http://localhost:3000";
const corsConfig = { origin: [origin], credentials: true };

module.exports = (app) => {
  app.use(cors(corsConfig));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
};
