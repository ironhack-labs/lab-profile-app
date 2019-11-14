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
      type: String,
      default: 'Not specified'
    },
    course: {
      type: String,
      default: 'Not specified'
    },
    image: {
      type: String,
      default: 'Not specified'
    }
  }, { timestamps: true }
);

module.exports = model('User', userSchema);