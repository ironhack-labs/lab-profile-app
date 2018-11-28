const multer     = require(`multer`),
      cloudinary = require(`cloudinary`),
      Storage    = require(`multer-storage-cloudinary`);

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key:    process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

const storage = Storage({
        cloudinary,
        folder:         `react-file-upload`,
        allowedFormats: [`jpg`, `jpeg`, `png`, `gif`, `webp`]
      });

module.exports = multer({storage});