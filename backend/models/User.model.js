const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    username: { type: String, unique: true, index: true },
    password: String,
    campus: String,
    course: String,
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
