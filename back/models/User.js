const { Schema, model } = require('mongoose')
const userSchema = new Schema({
    username: String,
    password: String,
    campus: {
        type: String,
        enum: ['Madrid', 'Barcelona', 'Miami', 'Paris', 'Berlin', 'Amsterdam', 'México', 'Sao Paulo', 'Lisbon']
    },
    course: {
        type: String,
        enum: ['Web Dev', 'UX/UI', 'Data Analytics']
    },
    image: {
        type: String,
        default: ''
    }
}, {
    timestamps: true
})

module.exports = model('User', userSchema)