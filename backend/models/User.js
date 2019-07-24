const { model, Schema } = require("mongoose");
const plm = require("passport-local-mongoose");

const userSchema = new Schema(
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
        "Mexico City",
        "Sao Paulo"
      ],
      default: "Mexico City"
    },
    course: {
      type: String,
      enum: ["WebDev", "UX/UI", "Data Analytics"],
      default: "WebDev"
    },
    img: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);
