const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    campus: {
      type: String,
      enum: [
        'Madrid',
        'Barcelona',
        'Miami',
        'Paris',
        'Berlin',
        'Amsterdam',
        'Mexico',
        'Sao Paulo',
        'Lisbon',
      ],
      required: true,
    },
    course: {
      type: String,
      enum: ['Web Dev', 'UX/UI', 'Data Analytics'],
      required: true,
    },
    image: String,
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
