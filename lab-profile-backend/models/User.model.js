const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
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
  course: { type: String, enum: ['Web Dev', 'UX/ UI', 'Data Analytics'] },
  image: { type: String },
});

const User = mongoose.model('User', userSchema);

export default User;
