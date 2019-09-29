const { model, Schema } = require('mongoose');
const plm = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    campus: String,
    course: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(plm, { usernameField: 'username' });

module.exports = model('User', userSchema);
