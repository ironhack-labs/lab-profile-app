const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true
      
    },
    campus: {
      type: String,
      enum: ['Madrid', 'Barcelona', 'Miami', 'Paris', 'Berlin', 'Amsterdam', 'México', 'SaoPaulo'],
    },
    course: {
      type: String,
      enum: ['WebDev', 'UX/UI', 'Data Analytics']
    },
   
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(PLM, { usernameField: 'username' });

module.exports = model('User', userSchema);