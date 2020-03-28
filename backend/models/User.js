const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: String,
        password: String,
        image: String,
        campus: {
            type: String,
            enum: ['Madrid', 'Barcelona', 'Miami', 'Paris', 'Berlin', 'Amsterdam', 'México', 'Sao Paulo', 'Lisbon']
        },
        course: {
            type: String,
            enum: ['WebDev', 'UX/ UI', 'Data Analytics']
        }
    },
    {
        timestamps: true
    },
)

module.exports = mongoose.model('User', userSchema);