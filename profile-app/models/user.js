'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  username: {
    type: String,
    trim: true,
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
      'São Paulo',
      'Lisbon'
    ],
    trim: true
  },
  course: {
    type: String,
    enum: ['WebDev', 'UX/UI', 'Data Analytics'],
    trim: true
  },
  image: {
    type: String
  },
  passwordHash: {
    type: String
  }
});

module.exports = mongoose.model('User', schema);
