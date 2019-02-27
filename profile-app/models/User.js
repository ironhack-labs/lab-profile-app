const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  campus: {type: String, enum:['Madrid','Barcelona','Miami','Paris','Berlin','Amsterdam','México','Sao Paulo']},
  course: {type: String, enum:['WebDev','UX/UI','Data Analytics']},
  imageUrl: { type: String, required: false }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
