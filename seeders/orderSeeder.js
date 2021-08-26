const faker = require("faker");
const { Order } = require("../models");

module.exports = async () => {
  const orders = [];
  const states = ["sin pagar", "pago", "enviado", "entregado"];
  for (let i = 0; i < process.env.ORDERS_NUMBER; i++) {
    orders.push({
      userId: faker.datatype.number({ min: 1, max: 30 }),
      state: faker.random.arrayElements(states, 1),
    });
  }

  await Order.bulkCreate(orders);



  console.log("[Database] Se corrió el seeder de Order.");
};
