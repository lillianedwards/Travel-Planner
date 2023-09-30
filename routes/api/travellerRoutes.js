const router = require("express").Router();
const { Traveller, Location, Trip } = require("../../models");

//http://localhost:3001/api/travellers
//WORKS ✅ - GET ALL TRAVELERS
router.get("/", async (req, res) => {
  try {
    const travellerData = await Traveller.findAll();
    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//http://localhost:3001/api/travellers
//WORKS ✅ - CREATE NEW TRAVELER
router.post("/", async (req, res) => {
  try {
    const newTraveller = await Traveller.create(req.body);
    res.status(200).json(newTraveller);
  } catch (err) {
    res.status(400).json(err);
  }
});

//http://localhost:3001/api/travellers/:traveller_id
//GET 1 TRAVELER BY :traveller_id
// WORK ✅

router.get("/:id", async (req, res) => {
  try {
    const singleTravellerData = await Traveller.findByPk(
      req.params.id,
      {
        include: [{model: Location, through: Trip, as: 'planned_trips'}]
      });
    if (!singleTravellerData) {
      res.status(404).json({ message: "No traveller found with that id!"});
      return;
    }
    res.status(200).json(singleTravellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});



//http://localhost:3001/api/travellers/:traveller_id
//DELETE 1 TRAVELLER BY ID
//WORKS ✅
router.delete('/:id', async (req,res) => {
  try {
    const singleTravellerDelete = await Traveller.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!singleTravellerDelete) {
      res.status(404).json({ message: "No traveller found with that id!" });
      return;
    }
    res.status(200).json(singleTravellerDelete);

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
