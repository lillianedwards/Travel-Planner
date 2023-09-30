const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Traveller extends Model {} 

Traveller.init (
  {
    traveller_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlpha: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  
  {
    // hooks: {
    //   beforeCreate: async (travellerData) => {
    //     travellerData.email = await  travellerData.email.toLowerCase();
    //     return travellerData;
    //   },
    // },

    sequelize,
    modelName: "traveller",

  }

);

module.exports = Traveller;