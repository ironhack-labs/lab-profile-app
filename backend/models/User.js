let mongoose = require('mongoose')
let Schema = mongoose.Schema
let passportLocalMongoose = require('passport-local-mongoose')


let userSchema = new Schema({
  username: {
    type:String,
    unique: true,
    required: true
  },
  email: {
    type:String,
    unique: true,
    required: true
  },
  profilePic:{
    type:String,
    default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5TUuXmx_ZWDtD3i0Dzeow2nQn1GrAjPYbqWUlAI8trL7440G2"
  }
},{
  timestamps:true,
  versionKey:false
})


userSchema.plugin(passportLocalMongoose,{usernameField:"email"})

module.exports = mongoose.model('User', userSchema)