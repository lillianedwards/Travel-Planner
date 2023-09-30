const router = require('express').Router();
const { Traveller, Location, Trip } = require("../../models");



//http://localhost:3001/api/locations
//WORKS ✅ - GET ALL LOCATION DATA
router.get('/', async (req, res) => {
  try {
    const locationData = await Location.findAll();
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//http://localhost:3001/api/locations
//WORKS ✅ - CREATE NEW LOCATION
router.post("/", async (req, res) => {
  try {
    const newLocation = await Location.create(req.body);
    res.status(200).json(newLocation);
  } catch (err) {
    res.status(400).json(err);
  }
});

//http://localhost:3001/api/locations/:location_id
//GET 1 LOCATION BY :location_id
// WORKS ✅
router.get("/:id", async (req, res) => {
  try {
    const singleLocationData = await Location.findByPk(
      req.params.id,
      {
        include: [{ model: Traveller, through: Trip, as: 'location_travellers'}]
      }
    );
    if (!singleLocationData) {
      res.status(404).json({ message: "No location found with that id!" });
      return;
    }
    res.status(200).json(singleLocationData);
  } catch (err) {
    res.status(500).json(err);
  }
});


//http://localhost:3001/api/locations/:location_id
//DELETE 1 LOCATION BY ID
//Don't think this is working - need to create more travelers and trips to test with 
router.delete('/:id', async (req,res) => {
  try {
    const singleLocationDelete = await Location.destroy({
      where: {
        id: req.params.id,
      }
    });
    if (!singleLocationDelete) {
      res.status(404).json({ message: "No location found with that id!" });
      return;
    }
    res.status(200).json(singleLocationDelete);

  } catch (err) {
    res.status(500).json(err);
  }
});








module.exports = router;