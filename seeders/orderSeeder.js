const faker = require("faker");
const { Order } = require("../models");
const { v4: uuidv4 } = require("uuid");

module.exports = async () => {
  const orders = [];
  const states = ["sin pagar", "pago", "enviado", "entregado"];
  for (let i = 0; i < process.env.ORDERS_NUMBER; i++) {
    const uuid = uuidv4();
    console.log(uuid);
    orders.push({
      userId: faker.datatype.number({ min: 1, max: 30 }),
      state: states[Math.floor(Math.random() * states.length)],
      uuid: uuid,
    });
  }

  await Order.bulkCreate(orders);

  console.log("[Database] Se corrió el seeder de Order.");
};
