const User = require("../models/userModel");
const fs = require("fs/promises");
async function userCreate(user) {
  try {
    const newUser = await User.create(user);
    console.log(newUser);
  } catch (e) {
    console.log(e.message);
  }
}

async function findPk(id) {
  try {
    const findpk = await User.findByPk(id);
    console.log(findpk instanceof User);
    console.log(findpk);
  } catch (e) {
    console.log(e.message);
    console.log("Not found!");
  }
}
async function findUno(email) {
  try {
    const findone = await User.findOne({ where: { email: email } });
    //  console.log(findone instanceof User)
    console.log(findone.email);
  } catch (e) {
    console.log(e.message);
    console.log("Not found!");
  }
}
async function Updates(info, id) {
  try {
    await User.update(info, {
      where: {
        id: id,
      },
    });
  } catch (e) {
    console.log(e.message);
  }
}
async function Deletesmth(id) {
  try {
    await User.destroy({
      where: {
        id: id,
      },
    });
  } catch (e) {
    console.log(e.message);
  }
}

async function createUsers() {
  try {
    const usersJson = await fs.readFile("./seeders/userSeeder.json");
    const users = JSON.parse(usersJson);

    const usersDB = await User.bulkCreate(users);
    console.log(usersDB);
  } catch (e) {
    console.log(e.message);
  }
}

async function aUser() {
    const ausers = await User.findAll();
    console.log(ausers)
}

module.exports = {
  userCreate,
  createUsers,
  findPk,
  findUno,
  Updates,
  Deletesmth,
  aUser
};
