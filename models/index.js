const Traveller = require("./Traveller");
const Trip = require("./Trip");
const Location = require("./Location");


//TRY #1
// Traveller.hasMany(Location, {
//   foreignKey: "location_id",
//   onDelete: 'CASCADE',
// }
// );

// Location.belongsToMany(Traveller, {
//   through: Trip,
//   foreignKey: "location_id",
// });

// Traveller.belongsToMany(Location, {
//   through: Trip,
//   foreignKey: "traveller_id"
// });


// TRY #2
// Trip.belongsToMany(Traveller, {
  //   through: Location,
  //   foreignKey: "traveller_id"
  // });
  
  // Trip.belongsToMany(Location, {
    //   through: Traveller,
    //   foreignKey: "location_id"
    // });
    



    //THIS IS A FUCKING PROBLEM - CAN'T CASCADE BECAUSE ASK BCS LEARNING ASSISTANT GAVE ME THE WORST BAND AID FIX I'VE EVER HEARD
    //ASK BCS SUGGESTION --> then told me to comment it out 
    Traveller.belongsToMany(Location, { through: Trip });
    Location.belongsToMany(Traveller, { through: Trip });




module.exports = {
  Traveller,
  Location,
  Trip,
};
