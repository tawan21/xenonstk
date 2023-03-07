const mongoose = require('mongoose');
const { Schema } = mongoose;
const QuerySchema = new Schema({
  email: {
    type: String,
    required: true
  },
  stream: {
    type: String,
    required: true
  },
  query: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Query = mongoose.model('query', QuerySchema);
module.exports = Query