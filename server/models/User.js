const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    campus: {
        type: String,
        enum: ["Madrid", "Barcelona", "Miami", "Paris", "Berlin", "Amsterdam", "México", "Sao Paulo"],
        default: 'Madird'
    },
    campus: {
        type: String,
        enum: ["WebDev", "UX/UI", "Data Analytics"],
        default: 'Madird'
    },
    image: String

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});


const User = mongoose.model('User', userSchema);
module.exports = User;