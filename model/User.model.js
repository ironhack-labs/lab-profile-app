const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    campus: {
        type: String,
        required: true,
        enum:["Madrid","Barcelona","Miami","Paris","Berlin","Amsterdam","Mexico","Sao Paulo","Lisbon"]
    },
    course: {
        type: String,
        required: true,
        enum:["Web Dev","UX/UI","Data Analytics"]
    },
    image:{
        type: String,
    }
});

module.exports = mongoose.model("User",UserSchema)