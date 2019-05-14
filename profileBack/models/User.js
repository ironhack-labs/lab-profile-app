const mongoose = require('mongoose')
const PLM = require('passport-local-mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
    {
        username: { type: String, required: true },
        password: { type: String },
        campus: {
            type: String,
            enum: ['Madrid', 'Barcelona', 'Miami', 'Paris', 'Berlin', 'Amsterdam', 'México', 'Sao Paulo']
        },
        course: {
            type: String,
            enum: ['WebDev', 'UX/ UI', 'Data Analytics']
        },
        image: { type: String },
    },
    {
        timeStamps: true,
        versionKey: false
    }
)

userSchema.plugin(PLM,{usernameField:'email'})
module.exports = mongoose.model('User',userSchema)

