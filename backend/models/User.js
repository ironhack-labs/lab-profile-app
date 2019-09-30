const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
{
  username: {
    type: String,
    required: true
  },
  campus: {
    type: String,
    enum: ['Madrid', 'Barcelona', 'Miami', 'Berlin', 'Amsterdam', 'Mexico', 'Sao']
  },
  course: {
    type: String,
    enum: ['WebDev', 'UX/UI', 'Data Analytics']
  },
  image: {
    type: String
  },
}, 
  {
    timestamps: true,
    versionKey: false
  }
);


userSchema.plugin(PLM, { usernameField: 'username' });

module.exports = model('User', userSchema);