require("./models/relations");
const userCreate = require("./seeders/userCreate");
const productCreate = require("./seeders/productCreate")
const {testConnection} = require("./sequelize")
// userCreate({firstName:"Lucas", surName: "TESTE", email: "aoda4doma", password: "Teste12313"})
productCreate({enabled:"true",name:"biscoito Amora",slung:"biscoito-amora",use_in_menu:"true",stock:"200",description:"MTOOOOO BOMMM !!",price:"6,2", discount:"0"})
testConnection();
