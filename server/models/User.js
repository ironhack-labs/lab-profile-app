const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
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
        'SaoPaulo',
        'Lisbon',
      ],
    },
    couse: {
      type: String,
      enum: ['WebDev', 'UX/UI', 'DataAnalytics'],
    },
    image: {
      type: String,
      default:
        'https://cnet1.cbsistatic.com/img/FLKvlrT-YBkKwhGm1mQAz1EwtP8=/940x0/2017/10/26/7dc9c97a-345d-4223-9bb4-55370079975c/el-chavo-1.jpg',
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
