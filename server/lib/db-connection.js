require("dotenv").config();

const mongoose = require("mongoose");

const connectionDB = async () => {
  try {
    await mongoose
      .set("useCreateIndex", true)
      .connect(process.env.REMOTE_HEROKU, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
    console.log(`Connection ready`);
  } catch (err) {
    console.error("Error connecting to mongo", err);
  }
};

module.exports = connectionDB;
