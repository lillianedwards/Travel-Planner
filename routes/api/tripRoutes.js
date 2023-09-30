const router = require("express").Router();
const { Traveller, Location, Trip } = require("../../models");

//http://locahost:3001/api/trips
//NOT TESTED  ❎- CREATE TRIP 'BETWEEN'? ASSOCIATED TRAVELLERS AND LOCATIONS
router.post("/", async (req, res) => {
  try {
    const newTrip = await Trip.create(req.body, 
    //   {
    //   how do i include when the association is between this trip table?
    // }
    );
    res.status(200).json(newTrip);
  } catch (err) {
    res.status(400).json(err);
  }
});


//http://localhost:3001/api/trips/:trip_id
//DELETE 1 TRIP BY ID 
///NOT TESTED ❎
router.delete('/:trip_id', async (req,res) => {
  try {
    const singleTripDelete = await Trip.destroy({
      where: {
        trip_id: req.params.trip_id,
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
