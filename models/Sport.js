const mongoose = require('mongoose');
const { Schema } = mongoose;
const SportSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  choice: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Sport = mongoose.model('sport', SportSchema);
module.exports = Sport