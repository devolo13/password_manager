const mongoose = require('mongoose');
const PasswordSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'password name is required']
    },
    website: {
      type: String,
    },
    password: {
      type: String,
      required: [true, 'a password is required']
    },
    folder: {
      type: String,
    },
    codes: {
      type: String,
    },
    notes: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports.Password = mongoose.model('Password', PasswordSchema);
