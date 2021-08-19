const { Admin, Product, User } = require("../models");

const store = async (req, res) => {
  //   res.json("ok");
  const product = await Product.create(req.body);
  console.log(product);
  res.json(req.body);
};

const index = async (req, res) => {
  const product = await Product.findAll();
  res.json(product);
};

const destroy = async (req, res) => {
  const admin = await Admin.findByPk(req.user.id);
  if (!admin) {
    return res.sendStatus(403);
  }
  // await User.destroy({ where: { id: req.body.id } });
  await Product.destroy({ where: { id: req.body.id } });
  return res.sendStatus(200);
};
module.exports = { store, index, destroy };
