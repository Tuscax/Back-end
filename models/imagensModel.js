const { DataTypes, Model } = require('sequelize');
const {sequelize} = require("../sequelize")

class Imagens extends Model {}

Imagens.init(
  {
    enabled: {
        type:DataTypes.BOOLEAN,
        allowNull:true,
        defaultValue: false
    },
    path: {
        type:DataTypes.STRING(50),
        allowNull:false
    }

  },
   {
    sequelize, 
    modelName: 'Imagens',
  },
);

module.exports = Imagens