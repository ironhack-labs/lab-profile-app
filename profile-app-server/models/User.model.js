const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      // unique: true -> Ideally, should be unique, but its up to you
    },
    password: {
      type: String,
      required: 'Password is required',
      match: [/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/, 'Password must contain at least 6 characters = uppercase, lowercase letters and numbers'],
    },
    campus: {
      type: String,
      enum: [
        'Madrid',
        'Barcelona',
        'Miami',
        'Paris',
        'Berlin',
        'Amsterdan',
        'México',
        'Sao Paulo',
        'Lisbon',
        'Remote',
      ],
    },
    course: {
      type: String,
      enum: ['Web Dev', 'UX/UI', 'Data Analytics', 'Cyber Security'],
    },
    image: String,
  },

  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }

);

const User = model("User", userSchema);

module.exports = User;
