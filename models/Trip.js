const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model {}


Trip.init (
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    trip_budget: {
      type: DataTypes.INTEGER, //.DECIMAL(10,2)
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
        key: 'id',
        unique: false
      }
    },
    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'location',
        key: 'id',
        unique: false
      }
    },
  }, 
  {
    sequelize,
    modelName: 'trip',
    timestamps: false,
    freezeTableName: true,
    underscored: true, 
  }
);


module.exports = Trip;