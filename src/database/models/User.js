const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  crn: {
    type: String,
    required: true
  },
  grad: {
    type: String,
    required: true
  },
  spec: {
    type: String,
    required: true
  }
});

const User = mongoose.model('user', UserSchema);
module.exports = User