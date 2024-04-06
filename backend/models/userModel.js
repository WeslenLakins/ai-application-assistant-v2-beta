const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [function() { return !this.isOAuth; }, 'Password is required'],
    },
    age: {
      type: Number,
      required: [true, 'Age is required'],
    },
    isAdmin: {
      type: Boolean,
      required: false,
      default: false,
    },
    isOAuth: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
