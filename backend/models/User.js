const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose')

let userSchema = new Schema({
	username: String,
	campus: {
		type: String,
		enum: ["Madrid","Sao Paulo", "Barcelona", "Miami", "Paris", "Berlin", "Amsterdam", "Mexico City"]
	},
	course: {
		type: String,
		enum: ["Web Dev", "UX/UI", "Data Analytics"]
	},
	photoURL: String,
},{timestamps:true})

userSchema.plugin(passportLocalMongoose, { usernameField: "username" })
module.exports = mongoose.model('User', userSchema)