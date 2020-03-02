const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const newsSchema = new Schema({
  titular: String,
  description: String,
  author:{type:Schema.Types.ObjectId, ref:'User'}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const News = mongoose.model('News', newsSchema);
module.exports = News;