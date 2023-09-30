const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Location extends Model {}

Location.init (
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    location_name: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlpha: true,
    },
  },
  
  {
    

    sequelize,
    modelName: "location",
    timestamps: false,
    freezeTableName: true,
    underscored: true, 

  }

);

module.exports = Location;
