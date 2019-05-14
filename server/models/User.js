const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  password: String,
  campus: { type: String, enum: ['Madrid', 'Barcelona', 'Miami', 'Paris', 'Berlin', 'Amsterdam', 'México', 'São Paulo'] },
  course: { type: String, enum: ['WebDev', 'UX/UI', 'Data Analytics'] },
  image: String,
});

const User = mongoose.model('User', userSchema);
module.exports = User;
