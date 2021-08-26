const faker = require("faker");
const { Order_Product } = require("../models");
const products = require("./products");

module.exports = async () => {
  try {
    const orders_products = [];

    for (let i = 1; i <= process.env.ORDERS_NUMBER; i++) {
      const numProducts = Math.ceil(Math.random() * 4);
      const orderId = i;
      for (let i = 1; i < numProducts; i++) {
        const id = faker.datatype.number({ min: 1, max: products.length - 1 });
        orders_products.push({
          orderId: orderId,
          productId: id,
          qty: Math.ceil(Math.random() * 8),
          unitPrice: products[id - 1].price,
        });
      }
    }

    await Order_Product.bulkCreate(orders_products);
    console.log("[Database] Se corrió el seeder de orders_products.");
  } catch (error) {
    console.log(error);
  }
};
