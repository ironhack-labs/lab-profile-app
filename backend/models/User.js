const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema(
  {
    username: String,
    campus: {
      type: String,
      enum: ['Madrid', 'Barcelona', 'Miami', 'Paris', 'Berlin', 'Amsterdam', 'México', 'Sao Paulo']
    },
    course: {
      type: String,
      enum: ['WebDev', 'UX / UI', 'Data Analytics']
    },
    image: {
      type: String,
      default: 'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-7.jpg'
    }
  },
  {
    timestamps: true
  }
)

userSchema.plugin(PLM, { usernameField: 'username' })

module.exports = model('User', userSchema)
