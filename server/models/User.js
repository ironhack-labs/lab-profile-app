const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  campus: String,
  course: String,
  image: String
});

module.exports = mongoose.model("user", userSchema);
