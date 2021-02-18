const { Schema, model } = require("mongoose")

const userSchema = new Schema(
  {
    email: String,
    password: String,
    googleID: String,
    facebookID: String,
    avatar: String
  },
  {
    timestamps: true
  }
)

module.exports = model("User", userSchema)
