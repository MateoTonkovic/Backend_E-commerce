const faker = require("faker");
const _ = require("lodash");
const { Order_Product } = require("../models");
const products = require("./products");

module.exports = async () => {
  try {
    const orders_products = [];

    for (let i = 1; i <= process.env.ORDERS_NUMBER; i++) {
      const numProducts = _.random(1, 5);
      const selectedProducts = _.sampleSize(products, numProducts);

      for (const product of selectedProducts) {
        orders_products.push({
          orderId: i,
          productId: product.id,
          qty: _.random(1, 8),
          unitPrice: product.price,
        });
      }
    }

    await Order_Product.bulkCreate(orders_products);
    console.log("[Database] Se corrió el seeder de orders_products.");
  } catch (error) {
    console.log(error);
  }
};
