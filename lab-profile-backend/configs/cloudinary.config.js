const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'lab-profile-app', // la carpeta en cloudinary
    format: async (req, file) => 'png',
    // para mantener el nombre original:
    public_id: (req, file) => file.originalname,
  },
});

module.exports = multer({ storage: storage });
