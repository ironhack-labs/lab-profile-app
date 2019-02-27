const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  campus: [
    {
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
    }
  ],
  course: [
    {
      type: String,
      enum: ["WebDev", "UX/IU", "Data Analytics"]
    }
  ],
  image: {
    type: String,
    default:
      "https://ceslava.com/blog/wp-content/uploads/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png"
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
