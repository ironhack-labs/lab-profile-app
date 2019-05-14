const mongoose = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    campus: {
      type: String,
      enum: [
        'Madrid',
        'Barcelona',
        'Miami',
        'Paris',
        'Berlin',
        'Amsterdam',
        'Mexico',
        'Sau Paulo'
      ]
    },
    course: {
      type: String,
      enum: ['WebDev', 'UX/UI', 'Data Analytics']
    },
    image: String
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = mongoose.model('User', userSchema)
