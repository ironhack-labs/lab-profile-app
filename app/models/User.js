const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
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
    },
    
},{
    timestamps: true
})

const User = model('User', userSchema);

module.exports = User;
