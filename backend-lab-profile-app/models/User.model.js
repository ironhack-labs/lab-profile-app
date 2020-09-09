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
  image: {
    type: String,
    default: 'https://freepikpsd.com/wp-content/uploads/2019/10/default-profile-image-png-1-Transparent-Images.png'
  }
})

module.exports = mongoose.model('User', UserSchema)