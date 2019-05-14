const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  password: String,
  campus: { type: String, enum: ['Madrid', 'Barcelona', 'Miami', 'Paris', 'Berlin', 'Amsterdam', 'Mexico', 'Sao Paulo'], default: 'Sao Paulo' },
  course: { type: String, enum: ['WebDev', 'UX/UI', 'Data Analitics'], default: 'WebDev' },
  image: { type: String, default: 'https://avatars.servers.getgo.com/2205256774854474505_medium.jpg' },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
