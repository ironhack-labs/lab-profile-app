const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Necesitas añadir un usuario"],
        unique: [true, "Ese usuario ya existe"]
    },
    password: String,
    campus: {
        type: String,
        enum: ['Madrid', 'Barcelona', ' Miami', 'Paris', 'Berlin', 'Amsterdam', 'Mexico', 'Sao Paulo', 'Lisbon']
    },
    course: {
        type: String,
        enum: ['Web Dev', 'UX/UI', 'Data Analytics', 'Cyber security']
    },
    image: String
}, {timestamps: true});

module.exports = model("User", userSchema)