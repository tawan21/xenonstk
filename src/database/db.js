const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://tawanjsingh:08a8nVtsZehVODI9@memorial-clg.i52zxmp.mongodb.net/memclg?retryWrites=true&w=majority';
const connectToMongo = async () => {
  const res = await mongoose.connect(mongoURI);
  console.log(res)
}

module.exports = connectToMongo;