'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  username: {
    type: String,
    trim: true
  },
campus: {
  type: String,
  enum: ['Madrid', 'Barcelona', 'Miami', 'Paris', 'Berlin', 'Amsterdam', 'México', 'Sao Paulo', 'Lisbon']
},
  passwordHash: {
    type: String
  },
  course: {
    type: String,
    enum: ['WebDev', 'UX/UI', 'Data Analytics']
  },
  image: String
});

module.exports = mongoose.model('User', schema);
