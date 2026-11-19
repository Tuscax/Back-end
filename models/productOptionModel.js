const { DataTypes, Model, INTEGER, STRING } = require('sequelize');
const {sequelize} = require("../sequelize")

class ProductOption extends Model {}

ProductOption.init(
  {
    title:{
        type:DataTypes. STRING(20),
        allowNull:false
    },
    shape: {
        type:DataTypes.ENUM("circle", "square"),
        allowNull:true,
        defaultValue: "square"
    },
    radius:{
        type:DataTypes.INTEGER,
        allowNull:true,
        defaultValue: 0
    },
    type:{
    type:DataTypes.ENUM("text", "color"),
    allowNull: true,
    defaultValue: "text"
    },
    values:{
        type:DataTypes.STRING(20),
        allowNull:false
    }

  },
   {
    sequelize, 
    modelName: 'ProductOption',
  },
);

module.exports = ProductOption