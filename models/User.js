const mongoose = require('mongoose');
const PLM = require('passport-local-mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
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
      'Sao Paulo'
    ]
  },
  course: {
    type: String,
    enum: ['WebDev', 'UX/UI', 'Data Analytics']
  },
  image: String
});

userSchema.plugin(PLM);

module.exports = mongoose.model('User', userSchema);
