const cloudinary = require('cloudinary') // Para conectarnos a la api con las credenciales de Cloudinary
const cloudinaryStorage = require('multer-storage-cloudinary')// Procesar imagenes y llevarlas a cloudinary
const multer = require('multer')// Para recibir y manejar los archivos en el request

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
})

// Configuramos como se van a almacenar las imagenes en cloudinary
const storage = cloudinaryStorage({
  cloudinary,
  folder: 'lastday',
  allowedFormats: ['jpg', 'png'],
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

// Le decimos a multer que va a almacenar las imagenes en base a la configuración de cloudinary
module.exports = multer({ storage })
