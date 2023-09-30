const Traveller = require("./Traveller");
const Trip = require("./Trip");
const Location = require("./Location");

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

Traveller.belongsToMany(Location, { through: Trip });
Location.belongsToMany(Traveller, { through: Trip });

// Trip.belongsToMany(Traveller, {
//   through: Location,
//   foreignKey: "traveller_id"
// });

// Trip.belongsToMany(Location, {
//   through: Traveller,
//   foreignKey: "location_id"
// });

module.exports = {
  Traveller,
  Location,
  Trip,
};
