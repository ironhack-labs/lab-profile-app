const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username:{
    type: String,
    required: 'User most be provided',
    unique: 'User already taken'
  },
  password:{
    type: String,
    required: 'Password most be defined'
  },
  campus:{
    type: String,
    enum: ['Madrid, Barcelona, Miami, Paris, Berlin, Amsterdam, México, Sao Paulo']
  },
  course:{
    type: String,
    enum: ['WebDev, UX/UI, Data Analytics']
  },
  profilePicture:{
    type: String
  }
},{
  timestamps:{
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('User', UserSchema)