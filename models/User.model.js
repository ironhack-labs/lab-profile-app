const { Schema, model } = require('mongoose');

const UserSchema = new Schema (
    {
        username: String,
        passwordHash: String,
        campus: { type: String, enum: ['Madrid', 'Barcelona', 'Miami', 'Paris', 'Berlin', 'Amsterdam', 'México', 'São Paulo', 'Lisbon']},
        course: { type: String, enum: ['Web Dev', 'UX/UI', 'Data Analytics']},
        image: String
    },
    {
        timestamps: true,
    }
)

module.exports = model('User', UserSchema);