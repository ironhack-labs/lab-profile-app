const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        unique: [true, "Ese usuario ya existe"]
    },
    email: {
        type: String,
        required: [true, "Necesitas añadir un correo"],
        unique: [true, "Ese correo ya existe"]
    },
    password: {
        type: String,
        required: [true, "Necesitas añadir una contraseña"],
    },
    status: {
        type: String,
        enum: ['Active', "Pending"],
        default: "Pending",
    },
    campus: {
        type: String,
        enum: ['Madrid', 'Barcelona', ' Miami', 'Paris', 'Berlin', 'Amsterdam', 'Mexico', 'Sao Paulo', 'Lisbon']
    },
    course: {
        type: String,
        enum: ['Web Dev', 'UX/UI', 'Data Analytics', 'Cyber security']
    },
    confirmationCode: {
        type: String,
        unique: true,
    },
    image: {
        type: String,
        default: "https://res.cloudinary.com/wbnkfjbkjf/image/upload/v1628884978/lab-profile-app/xcuska8fnhuvywsesyvt.png"
    }
}, {timestamps: true});

module.exports = model("User", userSchema)