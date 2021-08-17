const { Role } = require("../models");

module.exports = async () => {
  const roles = [
    { name: "admin", code: 100 },
    { name: "user", code: 200 },
  ];

  await Role.bulkCreate(roles);
  console.log("[Database] Se corrió el seeder de Roles.");
};
