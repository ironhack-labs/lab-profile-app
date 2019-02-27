const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  color: String,

  username: String,
  password: String,
  campus: { type: String, enum: ["Madrid", "Barcelona", "Miami", "Paris", "Berlin", "Amsterdam", "México", "Sao Paulo"] }, 
  course: { type: String, enum: ["WebDev", "UX/UI", "Data Analytics"] },
  imageUrl: String
});

module.exports = mongoose.model("User", UserSchema);