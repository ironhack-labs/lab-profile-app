const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

const userSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    campus: String,
    course: String,
    image: String
  },
  {
    timestamps: false,
    versionKey: true
  }
);


userSchema.plugin (plm,{
  username, password
})