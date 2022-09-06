const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10
const CITIES = ['Madrid', 'Barcelona', 'Miami', 'Paris', 'Berlin', 'Amsterdam', 'Mexico', 'Sau Pablo'];
const COURSES = ['WebDev','UX/UI','Data Analytics']

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    unique: true
  },
  password: {
    type: String,
    required: 'Password is required',
    match: [/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/,  'Password must contain at least six characters including uppercase, lowercase letters and numbers']
  },
  campus : {
    type: String,
    enum: CITIES
  },
  course : {
    type: String,
    enum: COURSES
  },
  avatarURL : {
    type: String,
    default: 'https://www.uic.mx/posgrados/files/2018/05/default-user.png'
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      ret.id = doc._id;
      delete ret._id;
      delete ret.__v;
      delete ret.password;
      return ret;
      
    }
  }
})

userSchema.pre('save', function(next) {
  const user = this;
  
  if (!user.isModified('password')) {
    next();
  } else {
    bcrypt.genSalt(SALT_WORK_FACTOR)
      .then(salt => {
        return bcrypt.hash(user.password, salt)
          .then(hash => {
            user.password = hash;
            next();
          })
      })
      .catch(error => next(error))
  }
});

userSchema.methods.checkPassword = function(password) {
  return bcrypt.compare(password, this.password);
}


const User = mongoose.model('User', userSchema);
module.exports = User;




