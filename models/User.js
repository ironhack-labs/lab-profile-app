const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  campus: {
    type: String,
    enum: ["Madrid", "Barcelona", "Miami", "Paris", "Berlin", "Amsterdam", "México", "Sao Paulo"],
    default: "employee"
  },
  course: {
    type: String,
    enum: ["WebDev", "UX / UI", "Data Science"],
    default: "employee"
  },
  image: String,
}, {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  })

userSchema.plugin(passportLocalMongoose, { usernameField: "username" })

module.exports = mongoose.model('User', userSchema)