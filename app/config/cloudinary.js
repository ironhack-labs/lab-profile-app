const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = cloudinaryStorage({
    cloudinary,
    folder: "profile-app",
    allowedFormats: ["jpg", "png"],
    filename: function (req, res, cb) {
        cb(null, res.originalname.split(".")[0]);
    },
});

const uploader = multer({ storage });
module.exports = uploader;