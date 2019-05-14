// const cloudinary = require("cloudinary")
// const multer = require("multer")
// const cloudinaryStorage = require("multer-storage-cloudinary")

// cloudinary.config({
//   cloud_name: process.env.cloudName,
//   api_key: process.env.cloudKey,
//   api_secret: process.env.cloudSecret
// })

// let storage = cloudinaryStorage({
//   cloudinary: cloudinary,
//   folder: "fullstack", 
//   allowedFormats: ["jpg", "png"],
//   filename: function(req, file, cb) {
//     cb(null, file.originalname) 
//   }
// })

// const parser = multer({ storage: storage })

// module.exports = parser