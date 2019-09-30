const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema(
  {
    username: String,
    campus: {
      type: String,
      enum: ['Madrid', 'Barcelona', 'Miami', 'Paris', 'Berlín', 'Amsterdam', 'México', 'Sao Paulo']
    },
    course: {
      type: String,
      enum: ['WebDev', 'UX/UI', 'Data Analytics']
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

userSchema.plugin(PLM)

module.exports = model('User', userSchema)