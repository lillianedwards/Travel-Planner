const router = require('express').Router();
const Traveller = require('../models/Traveller');


router.get('/', async (req, res) => {
  try {
    const travellerData = await Traveller.findAll()
    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newTraveller = await Traveller.create(req.body);
    res.status(200).json(newTraveller);
  } catch (err) {
    res.status(400).json(err);
  }
});