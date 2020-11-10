const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required : true
    },
    campus: {
        type: String,
        required: true,
        enum: ['Madrid', 'Barcelona', 'Miami', 'Paris', 'Berlin', 'Amsterdam', 'México', 'Sao Paulo', 'Lisbon']
    },
    course: {
        type: String,
        enum: ['Web Dev', 'UX/UI', 'Data Analytics']
    },
    imageUrl: String
})

const User = mongoose.model('User', userSchema)

module.exports = User