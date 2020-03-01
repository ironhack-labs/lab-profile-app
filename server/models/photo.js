// models/photo.js

const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const photoSchema = new Schema({
  imgName: String
}, {
  timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }
});

var Photo = mongoose.model("Photo", photoSchema);
module.exports = Photo;