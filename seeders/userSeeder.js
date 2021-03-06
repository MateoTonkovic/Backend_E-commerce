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
      addresses: faker.address.streetAddress(),
      phonenumbers: faker.phone.phoneNumber(),
      password: "$2a$10$kUJtcjNpSvHy3yTtQHyZVekhkMfnn95Nq8vl/rZdsqcSk4By3UsjO",

      // orderlist: [],
    });
  }

  await User.bulkCreate(user);
  console.log("[Database] Se corrió el seeder de User.");
};
