const cloudinary = require("cloudinary")
const multer = require("multer")
const cloudinaryStorage = require("multer-storage-cloudinary")

// Cloudinary personal keys
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
})

var storage = cloudinaryStorage({
	cloudinary: cloudinary,
	// Cloudinary folder
	folder: "fullstack",
	allowedFormats: ["jpg", "png", "gif"],
	filename: function(req, file, cb) {
		// Name of file in Cloudinary
		cb(null, file.originalname)
	}
})

const parser = multer({ storage })

module.exports = parser