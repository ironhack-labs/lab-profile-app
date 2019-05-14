const mongoose = require ('mongoose')

const PLM = require ('passport-local-mongoose')

const userSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    campus: String,
    course: String,
    image: String,
  },
  {
    timestamps: true,
    versionKey: false
  }
)

userSchema.plugin(PLM, {usernameField: 'email'})

module.exports = mongoose.model('User',userSchema)