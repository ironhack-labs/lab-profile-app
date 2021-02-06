const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    email: String,
    password: String,
    campus: String,
    course: String,
    image: String,
    facebookID: String,
    googleID: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model('User', userSchema);
