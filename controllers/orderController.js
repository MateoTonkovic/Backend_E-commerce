const { Admin, Order, Order_Product, User } = require("../models");
const slugify = require("slugify");

const store = async (req, res) => {
  const user = User.update({ where: { id: req.user.id } });
  const order = await Order.create(
    {
      state: "sin pagar",
      userId: req.user.id,
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

  res.json(order);
  /*     sendMail(fields.title, fields.content); */
};

const index = async (req, res) => {
  const order = await Order.findAll();
  res.json(order);
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


module.exports = { store, index, destroy, update };
