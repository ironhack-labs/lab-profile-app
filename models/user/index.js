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
  name: {
    type: String,
    required: false,
    trim: true
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
const findByEmailStatic = require("./statics/find-by-email");

schema.statics.signIn = signInStatic;
schema.statics.signUp = signUpStatic;
schema.statics.findByEmail = findByEmailStatic;

const User = mongoose.model("User", schema);

module.exports = User;
