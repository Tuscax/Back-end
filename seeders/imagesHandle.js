const Imagens = require("../models/imagensModel");
const Product = require("../models/productModel")
const fs = require("fs/promises");

async function insertImage(ProductId,image) {
    try {
       const product = await Product.findByPk(ProductId)
        if(!product){
            console.log("Produto não registrado/achado")
        }else {
           const imageDB = await Imagens.create({ProductId:ProductId,...image})
           console.log(imageDB)
        }
    } catch (e) {
        console.log(e.message)
    }
}
async function createImage() {
  try {
    const imageJson = await fs.readFile("./seeders/imageSeeder.json");
    const images = JSON.parse(imageJson);
    const imageDB = await Imagens.bulkCreate(images);
    console.log(imageDB);
  } catch (e) {
    console.log(e.message);
  }
}
module.exports = {
    insertImage,
    createImage
}