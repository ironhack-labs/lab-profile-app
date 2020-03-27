const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    campus: { type: String, enum: ["Madrid", "Barcelona", "Miami", "Paris", "Berlin", "Amsterdam", "México", "Sao Paulo", "Lisbon"] },
    course: { type: String, enum: ["WebDev", "UX/UI", "Data Analytics"] },
    image: { type: Object }
}, {
    timestamps: true
});

const defaultPicture =
    "https://ugc.kn3.net/i/760x/http://hotbeans.files.wordpress.com/2008/04/mustache-_0006_ned-flanders.jpg";
schema.virtual("profilepic").get(function () {
    // Try to get as local path
    let pic = _.get(this, "picture.path");
    if (!pic) {
        // Try to get as cloudinary url
        pic = _.get(this, "picture.url");
        if (!pic) {
            // none work, then use default picture
            pic = defaultPicture;
        } else {
            // Get as thumnbnail from cloudinary
            let public_id = _.get(this, "picture.public_id");
            const cloudUrlCroped = cloudinary.url(public_id, {
                width: 50,
                crop: "scale",
                secure: true
            });
            pic = cloudUrlCroped;
            console.log(cloudUrlCroped);
        }
    }
    // Place the root bar if we are serving the file from our express server
    return pic.startsWith("http") ? pic : `/${pic}`;
});

const User = mongoose.model("User", userSchema);
module.exports = User;