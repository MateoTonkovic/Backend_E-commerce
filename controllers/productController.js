const { Product } = require("../models");

const store = async (req, res) => {
  //   res.json("ok");
  const product = await Product.create(req.body);
  console.log(product);
  res.json(req.body);
};

module.exports = { store };
