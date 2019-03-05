const cloudinary = require("cloudinary");
const multer = require("multer");
const cloudinaryStorage = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

let storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "reactingBeers",
  allowedFormats: ["jpg", "png", "gif", "jpeg"],
  filename: (req, file, cb) => {
    cb(null, file.filename);
  }
});

const uploadCloud = multer({ storage: storage });

module.exports = uploadCloud;
