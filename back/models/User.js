const { Schema, model } = require('mongoose');

const userScheme = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    password: String,
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
      default: 'México',
    },
    course: {
      type: String,
      enum: ['Web Dev', 'UX/UI', 'Data Analytics'],
      default: 'Web Dev',
    },
    image: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model('User', userScheme);
