const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema(
    {
        username: String,
        campus: {
            type: String,
            enum: ['Madrid', 'Barcelona', 'Miami', 'Paris', 'Berlin', 'Amsterdam', 'México', 'Sao Paulo', 'Lisbon']
        },
        course: {
            type: String,
            enum: ['WebDev', 'UX/UI', 'Data Analytics']
        },
        image: {
            type: String,
            default: 'https://clipartart.com/images/default-profile-picture-clipart-3.jpg'
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

userSchema.plugin(PLM, { usernameField: 'username' })

module.exports = model('User', userSchema)