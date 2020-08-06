const mongoose = require('mongoose')
const {Schema} = mongoose

const UserSchema = new Schema({
  username: String,
  password: String,
  campus: {
    type: String,
    enum: ['Madrid', 'Barcelona', 'Miami', 'Paris', 'Berlin', 'Amsterdam', 'México', 'Sao Paulo', 'Lisbon']
  },
  course: {
    type: String,
    enum: ['Web Dev', 'UX/UI', 'Data Analytics']
  },
  image: String
})

module.exports = mongoose.model('User', UserSchema)