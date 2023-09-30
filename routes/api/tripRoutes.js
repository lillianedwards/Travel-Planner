const router = require("express").Router();
const { Trip } = require("../../models");

//http://locahost:3001/api/trips
//NOT TESTED  ❎- CREATE TRIP 'BETWEEN'? ASSOCIATED TRAVELLERS AND LOCATIONS
router.post("/", async (req, res) => {
  try {
    const newTrip = await Trip.create(req.body, 
    );
    res.status(200).json(newTrip);
  } catch (err) {
    res.status(400).json(err);
  }
});


//http://localhost:3001/api/trips/:trip_id
//DELETE 1 TRIP BY ID 
///WORKS ❎ -- How could you add multiple traveller_id's to the trip when you're creating it so it accounts for each person attending?
router.delete('/:id', async (req,res) => {
  try {
    const singleTripDelete = await Trip.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!singleTripDelete) {
      res.status(404).json({ message: "No trip found with that id!" });
      return;
    }
    res.status(200).json(singleTripDelete);

  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
