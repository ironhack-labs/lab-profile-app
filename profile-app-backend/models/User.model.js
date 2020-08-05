const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
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
      'México',
      'Sao Paulo',
      'Lisbon',
    ],
  },
  course: {
    type: String,
    enum: ['Web Dev', 'UX/UI', 'Data Analytics'],
  },
  image: {
    type: String,
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
