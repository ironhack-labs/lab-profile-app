const { model, Schema } = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema(
  {
    username: String,
    campus: {
      type: String,
      enum: ['Madrid', 'Barcelona', 'Miami', 'Paris', 'Berlin', 'Amsterdam', 'Mexico', 'Sao Paulo']
    },
    course: {
      type: String,
      enum: ['WebDev', 'UX/UI', 'Data Analytics']
    },
    image: String
  },
  {
    timestamps: true,
    versionKey: false
  }
)

userSchema.plugin(PLM, { usernameField: 'username' })

module.exports = model('User', userSchema)
