const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model {}


Trip.init (
  {
    trip_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    trip_budget: {
      type: DataTypes.INTEGER,
      allowNull: false,
      isNumeric: true,
    },
    traveller_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      isNumeric: true,
    },
    traveller_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'traveller',
        key: 'traveller_id',
      },
    },
    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'location',
        key: 'location_id',
      },
    },
  }, 
  {
    sequelize,
    modelName: 'trip',
  }
);


module.exports = Trip;