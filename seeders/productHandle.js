const Product = require("../models/productModel");
const fs = require("fs/promises");
const Imagens = require("../models/imagensModel")
async function productCreate(product) {
  try {
    const newProduct = await Product.create(product);
    console.log(newProduct);
  } catch (e) {
    console.log(e.message);
  }
}

async function findProduct(id) {
  try {
    const findProduct = await Product.findByPk(id);
    console.log(findProduct instanceof Product);
    console.log(findProduct);
  } catch (e) {
    console.log(e.message);
    console.log("Not found!");
  }
}
async function findProductImage(id) {
    try {
    const productDB = await Product.findOne({where: {id: id}, include:Imagens});
    console.log(productDB);
  } catch (e) {
    console.log(e.message);
    console.log("Not found!");
  }
}
async function updatesProduct(info, id) {
  try {
    await Product.update(info, {
      where: {
        id: id,
      },
    });
  } catch (e) {
    console.log(e.message);
  }
}
async function DeleteProduct(id) {
  try {
    await Product.destroy({
      where: {
        id: id,
      },
    });
  } catch (e) {
    console.log(e.message);
  }
}

async function createProduct() {
  try {
    const ProductJson = await fs.readFile("./seeders/productSeeder.json");
    const products = JSON.parse(ProductJson);

    const productDB = await Product.bulkCreate(products);
    console.log(productDB);
  } catch (e) {
    console.log(e.message);
  }
}

async function aProduct() {
    const aproduct = await Product.findAll();
    console.log(aproduct)
}

module.exports = {
  productCreate,
  createProduct,
  findProduct,
  updatesProduct,
  DeleteProduct,
  aProduct,
  findProductImage
};
