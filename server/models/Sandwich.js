const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const newsSchema = new Schema({
  name: String,
  ingredients: [String]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Sandwich = mongoose.model('Sandwich', newsSchema);
module.exports = Sandwich;