const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    username: String,
    password: String,
    campus: {
      type: String,
      enum: ["Madrid", "Barcelona", "Miami", "Paris", "Berlin", "Amsterdam", "Mexico", "Sao Paulo", "Lisbon"]
    },
    course: {
      type: String,
      enum: ["WebDev", "UX/UI", "Data Analytics"]
    },
    image: {
      type: String,
      default: "https://www.voanews.com/themes/custom/voa/images/Author__Placeholder.png"
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(PLM, { usernameField: 'username' });

module.exports = model('User', userSchema);
