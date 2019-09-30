"use strict";

const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  campus: {
    type: String
  },
  course: {
    type: String
  },
  image: {
    type: String
  },
  role: {
    type: String,
    required: true,
    enum: ["user", "editor", "admin"],
    default: "user"
  }
});

const signInStatic = require("./statics/sign-in");
const signUpStatic = require("./statics/sign-up");
const findByUserNameStatic = require("./statics/find-by-username");

schema.statics.login = signInStatic;
schema.statics.signUp = signUpStatic;
schema.statics.findByUserName = findByUserNameStatic;

const User = mongoose.model("User", schema);

module.exports = User;
