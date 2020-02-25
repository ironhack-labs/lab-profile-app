const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    username: String,
    campus:{
      type:String,
      enum:["Madrid", "Barcelona", "Miami", "Paris", "Berlin", "Amsterdam", "México", "Sao Paulo", "Lisbon"],
      default:"México"
    },
    course:{
      type:String,
      enum:["WebDev", "UX/UI", "Data Analytics"],
      default:"WebDev"
    },
    image:{
      type:String,
      default:"https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(PLM, { usernameField: 'username' });

module.exports = model('User', userSchema);
