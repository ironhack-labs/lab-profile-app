const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    campus: {
      type: String,
      enum: [
        'Barcelona',
        'Madrid',
        'Miami',
        'Paris',
        'Berlin',
        'Amsterdam',
        'Mexico',
        'Sao Paulo',
        'Lisbon',
      ],
      required: true,
    },
    course: {
      type: String,
      enum: ['Web Dev', 'UX/UI', 'Data Analytics'],
      required: true,
    },
    image: {
      type: String,
      default:
        'https://static.affinity-petcare.com/advance/cdn/farfuture/eLmd_ZpECGBKEOHP9gDD2DCsxfSInRV-8OZfhFAJLdA/drupal-cache:qe83x7/sites/default/files/styles/article-list/public/field/image/16-bosque_noruega.jpeg?itok=LXSxp1mE',
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);
module.exports = User;