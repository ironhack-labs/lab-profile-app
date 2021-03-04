const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
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
      'México',
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
  image: { type: String },
});

module.exports = mongoose.model('User', UserSchema);
