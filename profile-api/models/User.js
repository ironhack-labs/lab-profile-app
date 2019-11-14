const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    campus: {
      type: String
    },
    course: {
      type: String
    },
    image: {
      type: String
    }
  }, { timestamps: true }
);

module.exports = model('User', userSchema);