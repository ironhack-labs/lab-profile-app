const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique:true,
    },
    hashedPassword: {
      type: String,
      require: true,
    },
    campus: {
      type: String,
      require: true,
    },
    country: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
