require('dotenv').config()
const connectToMongo = require('./db/db');
const express = require('express')
const cors = require('cors')
connectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./db/auth'))
app.use('/api/query', require('./db/queries'))
app.use('/api/choice', require('./db/choice'))

if(process.env.NODE_ENV === 'production') {
  const path = require('path')

  app.get('/', (req, res) => {
    app.use(express.static(path.resolve(__dirname, 'client', 'build')))
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(port, () => {
  console.log(`backend listening at http://localhost:${port}`)
})