const { model, Schema } = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true
    },
    campus: {
      type: String,
      enum:["Madrid", "Barcelona", "Miami", "Paris", "Berlin", "Amsterdam", "México", "Sao Paulo", "Lisbon"]
    },
    course: {
      type: String,
      enum:["WebDev", "UX/UI", "Data Analytics"]
    }
    
  },
  {
    timestamps: true,
    versionKey: false
  }
)


userSchema.plugin(passportLocalMongoose, {usernameField: "email"});

module.exports = model("User", userSchema)