const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    username: String,
    campus: {
      enum: ['Madrid', 'Barcelona', 'Miami', 'Paris', 'Berlin', 'Amsterdam', 'México', 'Sao Paulo', 'Lisbon'],
      type: String
    },
    curse:{
      enum: ['WebDev', 'UX/UI', 'Data Analytics'],
      type: String
    },
    image: {
      type: String,
      default: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/b7c76929274393.55ead42cd721c.jpg'
    }
  },
  {
    timestamps: true,
    versionKey: false
  } 
);

userSchema.plugin(PLM, { usernameField: 'username' });

module.exports = model('User', userSchema);
