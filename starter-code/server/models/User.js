const mongoose = require('mongoose');
const _ = require('lodash');
const cloudinary = require('cloudinary');

const schema = new mongoose.Schema(
  {
    username: { type: String, unique: true },
    password: String,
    campus: {
      type: String,
      enum: [
        'Madrid',
        'Barcelona',
        'Miami',
        'Paris',
        'Berlin',
        'Amsterdam',
        'México',
        'Sao Paulo',
        'Lisbon'
      ]
    },
    course: {
      type: String,
      enum: ['WebDev', 'UX/UI', 'Data Analytics']
    },
    image: { type: Object }
  },
  {
    timestamps: true
  }
);

const defaultPicture =
  'https://www.sackettwaconia.com/wp-content/uploads/default-profile.png';
schema.virtual('profilepic').get(function() {
  // Try to get as local path
  let pic = _.get(this, 'image.path');
  if (!pic) {
    // Try to get as cloudinary url
    pic = _.get(this, 'image.url');
    if (!pic) {
      // none work, then use default picture
      pic = defaultPicture;
    }
    /*
    else {
      // Get as thumnbnail from cloudinary
      let public_id = _.get(this, 'image.public_id');
      const cloudUrlCroped = cloudinary.url(public_id, {
        width: 50,
        crop: 'scale',
        secure: true
      });
      pic = cloudUrlCroped;
    }
    */
  }
  // Place the root bar if we are serving the file from our express server
  return pic.startsWith('http') ? pic : `/${pic}`;
});

module.exports = mongoose.model('user', schema);
