const faker = require("faker");
const { User } = require("../models");

faker.locale = "en";

module.exports = async () => {
  const user = [];

  for (let i = 0; i < 30; i++) {
    user.push({
      firstname: faker.name.findName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      username: faker.internet.userName(),
    });
  }

  await User.bulkCreate(user);
  console.log("[Database] Se corrió el seeder de User.");
};
