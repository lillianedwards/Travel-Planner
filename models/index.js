const Traveller = require('./Traveller');
const Trip = require('./Trip');
const Location = require('./Location');

Traveller.hasMany(Location, {
  foreignKey: "location_id",
  onDelete: 'CASCADE',
} 
);

Location.belongsToMany(Traveller, {
  through: Trip,
  foreignKey: "location_id",
});

Traveller.belongsToMany(Location, {
  through: Trip,
  foreignKey: "traveller_id"
});

// Trips.belongsToMany(Location, {
//   thro
//   foreignKey: "trip_id",
// })