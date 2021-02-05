const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: String,
    lastName: String,
    email: String,
    password: String,
    googleID: String,
    facebookID: String,
    avatar: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model('User', userSchema);
