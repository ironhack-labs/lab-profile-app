const cloudinary = require('cloudinary')
const multer = require('multer')
const cloudinaryStorage= require('multer-storage-cloudinary')

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

let storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'ironhackLab', // The name of the folder in cloudinary
  allowedFormats: ['jpg', 'png', 'gif'], //
  filename: function (req, file, cb) {
    cb(null, file.originalname); // The file on cloudinary would have the same name as the original file name
  }
});

const parser = multer({ storage: storage });

module.exports = parser;