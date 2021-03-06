const { Admin, Order, Order_Product, User, Product } = require("../models");
const slugify = require("slugify");
const sendMail = require("../utils/sendMail.js");
const { v4: uuidv4 } = require("uuid");

const store = async (req, res) => {
  const user = await User.findByPk(req.user.id);
  if (!user) {
    return res.sendStatus(403);
  }
  const uuid = uuidv4();
  await User.update(req.body.user, { where: { id: req.user.id } });

  const order = await Order.create(
    {
      state: "sin pagar",
      userId: req.user.id,
      uuid: uuid,
      paymentMethod: req.user.paymentMethod,
    },
    { new: true }
  );
  req.body.products.map((product) => {
    Order_Product.create({
      orderId: order.id,
      productId: product.id,
      qty: product.qty,
      unitPrice: product.price,
    });
  });

  const orderMail = await Order.findOne({
    include: [Product, User],
    where: { id: order.id },
  });

  sendMail(orderMail.id, orderMail.user.firstname);
  res.json(orderMail);
};

const index = async (req, res) => {
  const admin = await Admin.findByPk(req.user.id);
  if (!admin) {
    return res.sendStatus(403);
  }
  const orders = await Order.findAll({ include: [Product, User] });
  res.json(orders);
};

const destroy = async (req, res) => {
  const admin = await Admin.findByPk(req.user.id);
  if (!admin) {
    return res.sendStatus(403);
  }
  // await User.destroy({ where: { id: req.body.id } });
  await Order.destroy({ where: { id: req.body.id } });
  return res.sendStatus(200);
};

const update = async (req, res) => {
  const admin = await Admin.findByPk(req.user.id);
  if (!admin) {
    return res.sendStatus(403);
  }

  const order = await Order.update(
    {
      state: "",
      userId: req.user.id,
      productId: req.body.product,
    },
    {
      where: {
        id: req.user.id,
      },
    }
  );
  res.json(order);
};

const show = async (req, res) => {
  const user = await User.findByPk(req.user.id);
  if (!user) {
    return res.sendStatus(403);
  }
  const orders = await Order.findAll({
    include: [Product, User],
    where: { userId: user.id },
  });
  res.json(orders);
};

const showOne = async (req, res) => {
  const user = await User.findByPk(req.user.id);
  if (!user) {
    return res.sendStatus(403);
  }
  console.log("hola");
  const order = await Order.findOne({
    include: [Product, User],
    where: { uuid: req.body.uuid },
  });
  res.json(order);
};

module.exports = { store, index, destroy, update, show, showOne };
