const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  username: String,
  password: String,
  campus: {
    type: String,
    enum: ['Madrid', 'Miami', 'Barcelona', 'Paris', 'Berlin', 'Amsterdam', 'Mexico', 'Sao Pablo', 'Lisbon']
  },
  course: {
    type: String,
    enum: ['WebDev', 'UX/UI', 'Data Anlaytics']
  },
  image: String,
}, {
    timestamps:{
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;