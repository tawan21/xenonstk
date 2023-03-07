const mongoose = require('mongoose');
const mongoURI = process.env.URI;
const connectToMongo = async () => {
  const res = await mongoose.connect(mongoURI);
  console.log(res)
}

module.exports = connectToMongo;