const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Traveller extends Model {} 

Traveller.init (
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlpha: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validata: {
        isEmail: true
      }
    }
  },
  
  {
    

    sequelize,
    modelName: "traveller",
    timestamps: false,
    freezeTableName: true,
    underscored: true, 

  }

);

module.exports = Traveller;