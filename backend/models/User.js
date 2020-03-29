const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: String,
        password: String,
        image: Object,
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

userSchema.virtual('profile_img').get(function () {
    let pic = this.image.path;
    return pic.startsWith('http') ? pic : `/${pic}`;
});

module.exports = mongoose.model('User', userSchema);