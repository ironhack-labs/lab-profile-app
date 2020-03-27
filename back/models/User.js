const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
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

const Users = mongoose.model("Users", userSchema);

Users.collection.createIndexes([
  {
    key: { username: 1 },
    name: "username"
  }
]);

module.exports = Users;
