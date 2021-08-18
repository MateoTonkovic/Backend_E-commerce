const faker = require("faker");
const { User } = require("../models");
const _ = require("lodash");
faker.locale = "en";

module.exports = async () => {
  const user = [];

  for (let i = 0; i < 30; i++) {
    user.push({
      firstname: faker.name.findName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      adresses: faker.address.streetAddress(),
      phonenumbers: faker.phone.phoneNumber(),
      password: "admin123",

      // orderlist: [],
    });
  }

  await User.bulkCreate(user);
  console.log("[Database] Se corrió el seeder de User.");
};
