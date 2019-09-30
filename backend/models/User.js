const {Schema, model} = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema(
  {
    username: String,
    campus: {
      type: String,
      enum: ['MADRID', 'BARCELONA', 'MIAMI', 'PARIS', 'BERLIN', 'AMSTERDAM', 'MEXICO', 'SAO PAULO']
    },
    course: {
      type: String,
      enum: ['WEB DEV', 'UX-UI', 'DATA ANALYTICS']
    },
    image: String
  },
  {
    timestamps: true
  }
)

userSchema.plugin(PLM, {usernameField: 'username'})
module.exports = model('User', userSchema)