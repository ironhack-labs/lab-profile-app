const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
    hora:String,
    consulta:String
    
  
}, 
{
  timestamps: true
});

const Card = mongoose.model('Card-model', cardSchema);
module.exports = Card;