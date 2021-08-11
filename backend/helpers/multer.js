const cloudinary = require('cloudinary');
const {CloudinaryStorage} = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
    cloud_name: process.env.CLOUDNAME,
    api_key: process.env.CLOUDAPIKEY,
    api_secret: process.env.CLOUDSECRET,
});

const storage = new CloudinaryStorage({

    cloudinary,

    params:{
        folder: "lab-profile-app",
        allowedFormats: ["jpg", "png", "jpeg"],
    }
});

module.exports = multer({storage})