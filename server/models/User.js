const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    password: String,
    campus: { type: String, enum: ['Madrid', 'Barcelona', 'Miami', 'Paris', 'Berlin', 'Amsterdam', 'Mexico', 'Sao Paulo', 'Lisbon'] },
    course: { type: String, enum: ['Web Dev', 'UX/UI', 'Data Analytics'] },
    imageUrl: String
  },
    {
      timestamps: true
    });


const User = mongoose.model('User', userSchema)

module.exports = User