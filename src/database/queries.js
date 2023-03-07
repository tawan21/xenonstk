const express = require('express');
const Query = require('./models/Query');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const { default: mongoose } = require('mongoose');

router.post('/create', [
  body('email', 'Enter a valid email').isEmail(),
  body('stream', 'Stream cannot be blank').exists(),
  body('query', 'Query cannot be blank').exists(),
], async (req, res) => {
  let success = false;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }
  try {
    const query = await Query.create({
      email: req.body.email,
      stream: req.body.stream,
      query: req.body.query
    });
    
    success = true;
    res.json({ success, query })

  }
  catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

module.exports = router