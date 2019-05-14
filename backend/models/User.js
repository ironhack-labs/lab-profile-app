const mongoose = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new mongoose.Schema(
    {
        username: String,
        password: String,
        campus: {
            type: String,
            enum: ['Madrid', 'Barcelona', 'Miami', 'Paris', 'Berlin', 'Amsterdam', 'México', 'Sao Paulo']
        },
        course: {
            type: String,
            enum: ['WebDev', 'UX/UI', 'Data Analytics']
        },
        image: String
    }
)

userSchema.plugin(PLM, {usernameField: 'username'})

module.exports = mongoose.model('User', userSchema)