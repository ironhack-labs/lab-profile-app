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
  image: {
    type:String,
    default: "https://res.cloudinary.com/dgmvfq29c/image/upload/v1576163424/lab-profile-app-react/default_picture_grvxyf.png"}
});

module.exports = mongoose.model('User', schema);
