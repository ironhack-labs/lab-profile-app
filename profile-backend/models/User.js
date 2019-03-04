const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose')


let userSchema = new Schema({
  username: String,
  campus:{
    type: String,
    enum: ["Madrid", "Barcelona", "Miami", "Paris", "Berlin", "Amsterdam", "México", "Sao Paulo"],

  },
  course:{
    type: String,
    enum: ["WebDev", "UX/UI", "Data Analytics"],

  },
  image:{
    type: String,
  }
}, {timestamps:true})

userSchema.plugin(passportLocalMongoose, { usernameField: "username" })

module.exports = mongoose.model('User', userSchema)