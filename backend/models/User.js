const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true
    },
    campus: {
      type: String,
      enum: ['Madrid', 'Barcelona', 'Miami', 'Paris', 'Berlin', 'Amsterdam', 'México', 'SaoPaulo'],
    },
    course: {
      type: String,
      enum: ['WebDev', 'UX/UI', 'Data Analytics']
    },
    image : {
      type:String,
      default: 'https://www.french-weekendbreaks.co.uk/sites/uk.picardiev3/themes/picardiev3/img_v2/user-default.jpg'
    }
  },
  {
    timestamps: true
  }
);

userSchema.plugin(PLM);

module.exports = model('User', userSchema);