const { Category } = require("../models");

module.exports = async () => {
  const categoria = [
    { name: "Damas", slug: "damas" },
    { name: "Hombres", slug: "hombres" },
    { name: "Deportes", slug: "deportes" },
    { name: "zapatos", slug: "zapatos" },
  ];

  await Category.bulkCreate(categoria);
  console.log("[Database] Se corrió el seeder de Categoría.");
};
