const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    password: String,
    campus: {
      type: String
      // enum: [
      //   "Madrid",
      //   "Barcelona",
      //   "Miami",
      //   "Paris",
      //   "Berlin",
      //   "Amsterdam",
      //   "Mexico",
      //   "Sao Paulo",
      //   "Lisbon"
      // ]
    },
    course: { type: String },
    // course: { type: String, enum: ["WebDev", "UX/UI", "Data Analytics"] },
    image: String
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);
// Users.collection.createIndexes([
//   {
//     key: { username: 1 },
//     name: "username"
//   }
// ]);
module.exports = User;
