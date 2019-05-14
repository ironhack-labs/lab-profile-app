const mongoose = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String
  },
  {
    timestamps: true,
    versionKey: false
  }
)

userSchema.plugin(PLM, { usernameField: 'email' })

module.exports = mongoose.model('User', userSchema)