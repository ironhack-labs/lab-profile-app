const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = cloudinaryStorage({
  cloudinary,
  folder: "lab-profile-app",
  allowedFormats: ["jpg", "png"],
  filename: function(req, file, cb) {
    console.log(file);
    cb(undefined, "my-file-name");
  }
});

const upload = multer({ storage });

module.exports = upload;
