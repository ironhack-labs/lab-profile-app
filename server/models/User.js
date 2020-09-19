const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    campus: {
        type: String,
        enum: ["Barcelona", "Miami", "Paris", "Berlin", "Amsterdam", "México", "Sao Paulo", "Lisbon"],
    },
    course: {
        type: String,
        enum: ["Web Dev", "UX/UI", "Data Analytics"]
    },
    photo: {
        type: String,
        default: "https://www.cardiff.ac.uk/__data/assets/image/0014/10841/no-profile.jpg"
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;