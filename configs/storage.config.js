const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

var storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'react-IronProfile', // The name of the folder in cloudinary
  allowedFormats: ['jpg', 'png'],
  filename: (req, file, next) => {
    next(null, `${new Date().getTime()}-${file.originalname}`); // The file on cloudinary would have the same name as the original file name
  }
});

const uploadCloud = multer({
  storage: storage
});

module.exports = uploadCloud;