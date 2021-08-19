const { Product } = require("../models");

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

module.exports = { store, index };
