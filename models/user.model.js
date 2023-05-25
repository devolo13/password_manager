const mongoose = require('mongoose');
import PasswordSchema from password.model.js;
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'username is required']
    },
    loginPassword: {
      type: String,
      required: [true, 'password is required']
    },
    passwords: [PasswordSchema],
  },
  { timestamps: true }
);
module.exports.User = mongoose.model('User', UserSchema);
