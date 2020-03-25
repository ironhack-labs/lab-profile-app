const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    username: { type: String, unique: true },
    password: String,
    campus: {
      type: String,
      required: true,
      enum: [
        'Madrid',
        'Barcelona',
        'Miami',
        'Paris',
        'Berlin',
        'Amsterdam',
        'México',
        'Sao Paulo',
        'Lisbon'
      ]
    },
    course: {
      type,
      String,
      enum: ['WebDev', 'UX/UI', 'Data Analytics']
    },
    image: { type: String }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('user', schema);
