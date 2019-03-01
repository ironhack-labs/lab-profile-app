let mongoose = require("mongoose")
let Schema = mongoose.Schema
let passportLocalMongoose = require("passport-local-mongoose")

let userSchema = new Schema(
  {
    username: String,
    image: {
      type: String
    },
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
        "Sao Paulo"
      ]
    },
    course: {
      type: String,
      enum: ["WebDev", "UX/UI", "Data Analytics"]
    }
  },
  { timestamps: true }
)

userSchema.plugin(passportLocalMongoose, { usernameField: "username" })

module.exports = mongoose.model("User", userSchema)
