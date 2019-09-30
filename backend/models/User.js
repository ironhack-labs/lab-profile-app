const {model, Schema} = require('mongoose')
const PLM = require('passport-local-mongoose')

const UserSchema = new Schema(
  {
    username: String,
    campus: {
      type:String,
      enum: ['Madrid', 'Barcelona', 'Miami', 'Paris', 'Berlin', 'Amsterdam', 'Mexico', 'Sao Paulo']
    },
    course: {
      type:String,
      enum: ['WebDev', 'UX/UI', 'Data Analytics']
    }
    
  },
  {
    timestamps: true,
    versionKey: false
  }
)

UserSchema.plugin(PLM)

module.exports = model('User', UserSchema)
