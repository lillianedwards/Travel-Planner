const router = require('express').Router();

const travellers = require('./travellerRoutes');
const locations = require('./locationRoutes');
const trips = require('./tripRoutes');

router.use('/travellers', travellers);
router.use('/locations', locations);
router.use('/trips', trips);

module.exports = router;