require("./models/relations");
const {
  userCreate,
  createUsers,
  findPk,
  findUno,
  Updates,
  Deletesmth,
  aUser,
} = require("./seeders/userCreate");
const productCreate = require("./seeders/productCreate");
const { testConnection } = require("./sequelize");
const User = require("./models/userModel");
const { insertImage, createImage } = require("./seeders/imagesHandle");
const { createProduct, findProductImage } = require("./seeders/productHandle");
// userCreate({firstName:"Lucas", surName: "TESTE", email: "aoda4doma", password: "Teste12313"})
// productCreate({enabled:"true",name:"biscoito Amora",slung:"biscoito-amora",use_in_menu:"true",stock:"200",description:"MTOOOOO BOMMM !!",price:"6,2", discount:"0"})
testConnection();
// createUsers();

async function espere() {
  // await findPk(20);
  // await findUno("carolina17@gmail.com");
  // await Updates({ firstName: "Leste" }, 3);
  // await Deletesmth(5);
    // aUser();
    // await createProduct();
// await insertImage(1,{enabled: true, path:"TESTEE"})
// await createImage()
findProductImage(4)
}

espere()