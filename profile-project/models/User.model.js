const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema(
    {
        username: String,
        password: String,
        campus: {
            type: String,
            enum: ["Madrid","Barcelona","Miami","Paris","Berlin","Amsterdam","Mexico","Sao Paulo","Lisbon"]
        },
        course: {
            type: String,
            enum: ['Web Dev','UX/UI','Data Analytics']
        },
        image: {
            type: String,
            default: "https://www.creativefabrica.com/wp-content/uploads/2019/12/04/AVATAR_FINAL_2-6-1-580x386.jpg"
}},
{
    timestamps: true
})

const User = mongoose.model("User", userSchema)
module.exports = User