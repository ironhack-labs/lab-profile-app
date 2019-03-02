let mongoose = require('mongoose')
let Schema = mongoose.Schema
let passportLocalMongoose = require("passport-local-mongoose")

let userSchema = new Schema({
    username: String,
    password: String,
    campus: {
        type:String,
        enum: ['Madrid', 'Barcelona', 'Miami', 'Paris', 'Berlin', 'Amsterdam', 'Mexico', 'Sao Paulo']
    },
    course: {
        type: String,
        enum: ['WebDev', 'UX/UI', 'Data Analytics']
    },
    image: {
        type: String,
        default: 'https://res.cloudinary.com/cappsule/image/upload/v1540575763/public/avatar.png'
    }
})
userSchema.plugin(passportLocalMongoose, {usernameField: "username" })

module.exports = mongoose.model ('User', userSchema)