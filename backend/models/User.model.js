const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    username: { type: String, unique: true, index: true },
    password: String,
    campus: String,
    course: String,
    image: String
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
