'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  passwordHash: {
    type: String
  },
  campus: {
    type: String,
    enum: ["Madrid", "Barcelona", "Miami", "Paris", "Berlin", "Amsterdam", "México", "Sao Paulo", "Lisbon"]
  },
  course: {
    type: String,
    enum: ["WebDev", "UX/UI", "Data Analytics"]
  },
  image: {
    type: String
  }

});

module.exports = mongoose.model('User', schema);