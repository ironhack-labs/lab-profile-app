const mongoose = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true
        },
        // password: String, NO SE NECESITA X LA CONFIG DE PASSPORT, YA HACE EL HASHEO
        campus: {
            type: String,
            enum: ['Madrid', 'Barcelona', 'Miami', 'Paris', 'Berlin', 'Amsterdam', 'México', 'Sao Paulo']
        },
        course: {
            type: String,
            enum: ['WebDev', 'UX/UI', 'Data Analytics']
        },
        image: String
    },
    {
        timestamps: true,
        versionKey: false
    }
)

userSchema.plugin(PLM, {usernameField: 'username'})

module.exports = mongoose.model('User', userSchema)