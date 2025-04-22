const express = require('express');
const router = express.Router();

router.get('/ping', (req, res) => {
  res.send('Auth route is alive 🚀');
});

module.exports = router;
