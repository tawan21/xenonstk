const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Sport = require('./models/Sport')

router.post('/create', [
  body('email', 'Email invalid').isEmail(),
  body('choice', 'Choice cannot be blank').exists()
], async (req, res) => {
  let success = false;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }
  try {
    let sp = await Sport.findOne({ email: req.body.email });
    if (sp) {
      await Sport.updateOne({ _id: sp._id }, { $set: { choice: req.body.choice } });
    }
    else {
      const sport = await Sport.create({
        email: req.body.email,
        choice: req.body.choice
      });
    }

    success = true;
    res.json({ success })

  }
  catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

module.exports = router