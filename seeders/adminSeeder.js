const faker = require("faker");
const { Admin } = require("../models");
const _ = require("lodash");
faker.locale = "en";

module.exports = async () => {
  const admin = [];

  admin.push({
    firstname: faker.name.findName(),
    lastname: faker.name.lastName(),
    email: "admin@admin.com",
    password: "$2a$10$kUJtcjNpSvHy3yTtQHyZVekhkMfnn95Nq8vl/rZdsqcSk4By3UsjO",
  });

  await Admin.bulkCreate(admin);
  console.log("[Database] Se corrió el seeder de Admin.");
};
