const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PhotoSchema = new Schema(
  {
    image: String,
    authorId: { type: Schema.Types.ObjectId, ref: "User" }
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }
  }
);

const Photo = mongoose.model("Photo", PhotoSchema);
module.exports = Photo;
