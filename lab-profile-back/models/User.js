const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String
    },
    course: {
       type: String,
       enum: ['WebDev', 'UX/UI', 'Data Analytics'] 
    },
    campus: {
        type: String,
        enum: ['Madrid', 'Barcelona', 'Miami', 'Paris', 'Berlin', 'Amsterdam', 'México', 'Sao Paulo', 'Lisbon'],
    },
    imageUrl: {
        type: String,
        default: 'https://res.cloudinary.com/deyy3glzl/image/upload/v1587652134/perfil-avalia_uekcwz.png'
    
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;