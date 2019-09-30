"use strict";

const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  campus: {
    type: String,
    required: true,
    enum: [
      "Madrid",
      "Barcelona",
      "Miami",
      "Paris",
      "Berlin",
      "Amsterdam",
      "México",
      "São Paulo"
    ]
  },
  course: {
    type: String,
    required: true,
    enum: ["Web Dev", "UX/UI", "Data Analytics"]
  },
  image: {
    type: String
  }
});

const signInStatic = require("./statics/sign-in");
const signUpStatic = require("./statics/sign-up");

schema.statics.signIn = signInStatic;
schema.statics.signUp = signUpStatic;

const User = mongoose.model("User", schema);

module.exports = User;
