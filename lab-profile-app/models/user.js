'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  username: {
    type: String,
    trim: true
  },
  passwordHash: {
    type: String
  },
  campus: {
    type: String,
    required: true,
    enum: [ 'Madrid', 'Barcelona', 'Miami', 'Paris', 'Berlin', 'Amsterdam', 'México', 'São Paulo', 'Lisbon' ]
  },
  course: {
    type: String,
    required: true,
    enum: [ 'WebDev', 'UX/UI', 'Data Analytics' ]
  },
  image: {
    type: String
  }
});

module.exports = mongoose.model('User', schema);
