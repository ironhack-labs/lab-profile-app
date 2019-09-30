const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    },
    // password: {
    //   type: String,
    //   required: true
    // },
    campus: {
      type: String,
      enum: ['Madrid', 'Barcelona', 'Miami', 'Paris', 'Berlin', 'Amsterdam', 'México', 'Sao']
    },
    course: {
      type: String,
      enum: ['WebDev', 'UX/UI', 'Data Analytics']
    },
    image: {
      type: 'String'
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);
//Set the schema to use passport-local-mongoose
// Borro porque no se solicita email
// userSchema.plugin(PLM, { usernameField: 'email' });

userSchema.plugin(PLM, { usernameField: 'username' });
module.exports = model('User', userSchema);