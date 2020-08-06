const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  campus: [String], enum:['Madrid', 'Barcelona', 'Miami', 'Paris', 'Berlin', 'Amsterdam', 'México', 'Sao Paulo', 'Lisbon'],
  course: [String], enum: ['Web Dev', 'UX/UI', 'Data Analytics'],
  image: String
},
  {
    timestamps: true
  });

const User = mongoose.model('User', userSchema);
module.exports = User;