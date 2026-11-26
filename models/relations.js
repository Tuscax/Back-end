const User = require("./userModel");
const Category = require("./categoryModel");
const Imagens = require("./imagensModel");
const Product = require("./productModel");
const ProductO = require("./productOptionModel");

Product.hasMany(Imagens, { foreignKey: "product_id" });
Product.hasMany(ProductO, {
  foreignKey: "product_id",
});
Product.belongsToMany(Category, { through: "Product_category" });
Category.belongsToMany(Product, { through: "Product_category" });

// Product.Imagens = Product.belongsTo(Imagens)
module.exports = {
  User,
  Category,
  Imagens,
  Product,
  ProductO,
};
