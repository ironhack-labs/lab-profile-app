const mongoose = require('mongoose')
const PLM = require('passport-local-mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  campus: {
    type: String,
    enum: ['Madrid', 'Barcelona', 'Miami', 'Paris', 'Berlin', 'Amsterdam', 'Mexico City']
  },
  course: {
    type: String,
    enum: ['Web Development', 'UX/UI Design', 'Data Analytics']
  }
})

userSchema.plugin(PLM)

module.exports = mongoose.model('User', userSchema)
