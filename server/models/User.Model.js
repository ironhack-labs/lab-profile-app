const {
  Schema,
  model
} = require('mongoose')


const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: String,
  name: {
    type: String,
    trim: true,
  },
  picture: { type: String, default: 'https://memegenerator.net/img/instances/67438689/oh-great-im-a-profile-photo.jpg' },

}, {
  timestamps: true
})

module.exports = model("User", userSchema)
