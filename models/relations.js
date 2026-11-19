const User = require("./userModel");
const Category= require("./categoryModel")
const Imagens= require("./imagensModel")
const Product= require("./productModel")
const ProductO= require("./productOptionModel");
const { FOREIGNKEYS } = require("sequelize/lib/query-types");
Product.hasMany(Imagens,{
    FOREIGNKEYS: "product_id"
})

Product.hasMany(ProductO,{
    foreignKey:"product_id"
})

// Product.Imagens = Product.belongsTo(Imagens)
module.exports = {
    User,
    Category,
    Imagens,
    Product,
    ProductO
}