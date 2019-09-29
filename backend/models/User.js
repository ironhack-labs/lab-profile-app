const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema(
  {
    username: String,
    password: String,
    campus: {
      type: String,
      enum: ['Madrid', 'Barcelona', 'Miami', 'Paris', 'Berlin', 'Amsterdam', 'México', 'Sao Paulo']
    },
    course: {
      type: String,
      enum: ['WebDev', 'UX/UI', 'Data Analytics']
    },
    image: {
      type: String,
      default: 'http://pluspng.com/img-png/png-user-icon-account-friend-human-man-member-person-profile-user-256.png'
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
)

userSchema.plugin(PLM, {userSchema: 'username'})
module.exports = model('User', userSchema)