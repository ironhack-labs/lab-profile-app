'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  username: {
    type: String,
    trim: true
  },
  campus: {
    type: String,
    enum: ['Madrid', 'Barcelona', 'Miami', 'Paris', 'Berlin', 'Amsterdam', 'México', 'Sao Paulo', 'Lisbon' ]
  },
  course: {
    type: String,
    enum: ['WebDev', 'UX/UI', 'Data Analytics']
  },
  passwordHash: {
    type: String
  },
  image: {
    type: String
  }
});

module.exports = mongoose.model('User', schema);

