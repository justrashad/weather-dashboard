const router = require('express').Router();

// Placeholder for weather routes
router.route('/').get((req, res) => {
  res.json('Weather route works');
});

module.exports = router;
