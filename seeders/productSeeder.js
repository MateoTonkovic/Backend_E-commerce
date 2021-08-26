const { Product } = require("../models");
const products = require("./products");

module.exports = async () => {
  await Product.bulkCreate(products);
  console.log("[Database] Se corrió el seeder de Productos.");
};
