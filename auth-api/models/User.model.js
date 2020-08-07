const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
        enum: [
            'Madrid',
            'Barcelona',
            'Miami',
            'Paris',
            'Berlin',
            'Amsterdam',
            'Mexico',
            'Sao Paulo',
            'Lisbon'
        ]
    },
    course: {
        type: String,
        enum: [
            'Web Dev',
            'UX/UI',
            'Data Analytics'
        ]
    },
    image: String
    },
    {timestamps: true}
);

const User = mongoose.model('User', userSchema);
module.exports = User;