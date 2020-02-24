const { Schema, model } = require("mongoose");
const PLM = require("passport-local-mongoose");

const userSchema = new Schema(
  {
    username: String,
    campus: {
      type: String,
      enum: ["Madrid", "Barcelona", "Miami", "Paris", "Berlin", "Amsterdam", "México", "Sao Paulo", "Lisbon"]
    },
    course: {
      type: String,
      enum: ["WebDev", "UX/UI", "Data Analytics"]
    },
    image: {
      type: String,
      default:"https://i.udemycdn.com/user/200_H/34872226_e8a5_2.jpg"
    }
  },
  {
    timestamps: true,
  }
);

userSchema.plugin(PLM, { usernameField: "username" });

module.exports = model("User", userSchema);