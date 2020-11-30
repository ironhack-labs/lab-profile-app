const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
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
    default: 'https://afmnoco.com/wp-content/uploads/2019/07/74046195_s.jpg'
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
