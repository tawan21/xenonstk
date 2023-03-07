require('dotenv').config()
const connectToMongo = require('./db');
const express = require('express')
const cors = require('cors')
connectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', require('../auth'))
app.use('/api/query', require('./queries'))
app.use('/api/choice', require('./choice'))

app.listen(port, () => {
  console.log(`backend listening at http://localhost:${port}`)
})