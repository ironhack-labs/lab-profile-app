const mongoose = require("mongoose");

const USERNAME = /[a-zA-Z0-9_-]{3,15}/;
const PASSWORD_PATTERN = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
const CAMPUS = [
  "Madrid",
  "Barcelona",
  "Miami",
  "Paris",
  "Berlin",
  "Amsterdam",
  "México",
  "Sao Paulo",
  "Lisbon"
];
const COURSE = ["WebDev", "UX/UI", "Data Analytics"];

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: "Username is required",
      unique: true,
      trim: true,
      match: [
        USERNAME,
        "Username must containt at least three characters and cannot spaces."
      ]
    },
    password: {
      type: String,
      required: "Password is required",
      match: [
        PASSWORD_PATTERN,
        "Passwords must contain at least six characters, including uppercase, lowercase letters and numbers."
      ]
    },
    campus: {
      type: String,
      required: "Campus is required",
      enum: CAMPUS
    },
    course: {
      type: String,
      required: "Course is required",
      enum: COURSE
    },
    image: String
  },
  {
    timestamps: true
  }
);

const model = mongoose.model("User", userSchema);

model.collection
  .createIndexes([
    {
      key: { username: 1 },
      name: "username"
    }
  ])
  .catch(e => console.log(e));

module.exports = model;
