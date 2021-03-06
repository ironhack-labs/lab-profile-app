require("dotenv").config();
const mongoose = require("mongoose");

const { MONGODB_URL } = process.env;
const dbOptions = {
  userCreateIndex: true,
  userNewUrlParser: true,
  useUnifiedTopology: true,
};

module.exports = async () => {
  await mongoose.connect(MONGODB_URL, dbOptions);
  console.log("Conected to mongo in", MONGO_URL);
};
