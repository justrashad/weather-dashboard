const router = require('express').Router();
let Location = require('../models/location.model');

// Get all locations for a user
router.route('/:userId').get((req, res) => {
  Location.find({ user_id: req.params.userId })
    .then(locations => res.json(locations))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add a new location
router.route('/add').post((req, res) => {
  const user_id = req.body.user_id;
  const location_name = req.body.location_name;
  const coordinates = {
    lat: req.body.coordinates.lat,
    lon: req.body.coordinates.lon,
  };

  const newLocation = new Location({ user_id, location_name, coordinates });

  newLocation.save()
    .then(() => res.json('Location added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
