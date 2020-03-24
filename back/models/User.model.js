const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    username: String,
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
        "México",
        "Sao Paulo",
        "Lisbon"
      ]
    },
    course: { type: String, enum: ["WebDev", "UX/UI", "Data Analytics"] },
    image: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("user", schema);
