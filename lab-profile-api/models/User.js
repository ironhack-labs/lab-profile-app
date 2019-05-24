const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    campus: {
      type: String,
      enum: [
        "Madrid",
        "Barcelona",
        "Miami",
        "Paris",
        "Berlin",
        "Amsterdam",
        "México",
        "Sao Paulo"
      ]
    },
    course: {
      type: String,
      enum: ["WebDev", "UX/UI", "Data Analytics"]
    },
    image: {
      type: String
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema);
