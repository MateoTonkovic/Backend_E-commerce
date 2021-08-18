const { Product } = require("../models");

module.exports = async () => {
  const productos = [
    {
      name: "Championes",
      description: "Nike",
      photo: "nike.jpg",
      price: 50,
      stock: 10,
      bestproduct: true,
      slug: "championes",
      categoryId: 1,
    },
  ];

  await Product.bulkCreate(productos);
  console.log("[Database] Se corrió el seeder de Productos.");
};
