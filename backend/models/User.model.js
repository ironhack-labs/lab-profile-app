const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    username: { type: String, unique: true, index: true },
    password: String,
    campus: {
      type: String,
      enum: [
        "Madrid",
        "Barcelona",
        "Miami",
        "Paris",
        "Berlin",
        "Amsterdam",
        "Mexico",
        "Sao Paulo",
        "Lisbon"
      ]
    },
    course: {
      type: String,
      enum: ["WebDev", "UX/UI", "Data Analytics"]
    },
    image: {
      type: String,
      default:
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/b7c76929274393.55ead42cd721c.jpg"
    }
  },
  {
    timestamps: true
  }
);

const model = mongoose.model("user", schema);

model.collection.createIndexes([
  {
    key: { username: 1 },
    name: "username"
  }
]);

module.exports = model;
