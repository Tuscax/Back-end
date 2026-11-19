const Product = require("../models/productModel");

async function productCreate(product) { try{
    const newProduct = await Product.create(product);
    console.log(newProduct)} catch(e){
        console.log(e.message)
    }
    
}
module.exports = productCreate