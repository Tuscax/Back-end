const { DataTypes, Model } = require('sequelize');
const {sequelize} = require("../sequelize")

class Product extends Model {}

Product.init(
  {
    enabled: {
        type:DataTypes.BOOLEAN,
        allowNull:true,
        defaultValue: false
    },
    name: {
        type: DataTypes.STRING(40),
        allowNull:false,
        unique:false
    },
    slug: {
        type: DataTypes.STRING(50),
        allowNull:false,
        unique:true
    },
    use_in_menu: {
        type: DataTypes.BOOLEAN,
        allowNull:true,
        defaultValue: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull:true,
        defaultValue: 0 
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull:false
    },
    price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull:false
    },
    discount:{
        type: DataTypes.DECIMAL(4,2),
        allowNull:true,
        defaultValue:0
    } 
  },
   {
    sequelize, 
    modelName: 'Product',
  },
);

module.exports =  Product
