const { Category } = require("../models");

module.exports = async () => {
  const categoria = [
    { name: "calzado", slug: "calzado" },
    { name: "vestimenta deportiva", slug: "vestimenta-deportiva" },
  ];

  await Category.bulkCreate(categoria);
  console.log("[Database] Se corrió el seeder de Categoría.");
};
