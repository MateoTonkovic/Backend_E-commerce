const faker = require("faker");
const { Order_Product } = require("../models");
const productos = require("./products");

module.exports = async () => {
  const orders_products = [];

  
  console.log(productos);
  for (let i = 0; i < 30; i++) {
    const numProducts = Math.round(Math.random() * 6);

    for (let i = 0; i < numProducts; i++) {
      const id = faker.datatype.number({ min: 1, max: productos.length });

      orders_products.push({
        orderId: i,
        productId: id,
        qty: Math.ceil(Math.random() * 8),
        unitPrice: productos[id].price,
      });
    }
  }

  await Order.bulkCreate(orders_products);
  console.log("[Database] Se corrió el seeder de orders_products.");
};
