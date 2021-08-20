const { Admin, Product, User } = require("../models");
const formidable = require("formidable");
const slugify = require("slugify");

const store = async (req, res) => {
  const form = formidable({
    multiples: false,
    uploadDir: "./public/img",
    keepExtensions: true,
  });
  form.parse(req, async (err, fields, files) => {
    const path = require("path");
    const imgName = path.basename(files.photo.path);
    if (files.photo.name === "") {
      const fs = require("fs");
      fs.unlink(files.photo.path, () => {});
    }
    const product = await Product.create(
      {
        name: fields.name,
        description: fields.description,
        photo: "/img/" + imgName,
        stock: fields.stock,
        bestproduct: fields.bestproducts,
        slug: slugify(fields.name, { replacement: "-" }),
        price: fields.price,
      },
      { new: true }
    );
    res.json(product);
    /*     sendMail(fields.title, fields.content); */
  });
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

const update = async (req, res) => {
  const admin = await Admin.findByPk(req.user.id);
  if (!admin) {
    return res.sendStatus(403);
  }
  const form = formidable({
    multiples: false,
    uploadDir: "./public/img",
    keepExtensions: true,
  });
  form.parse(req, async (err, fields, files) => {
    const path = require("path");
    const imgName = path.basename(files.photo.path);
    if (files.photo.name === "") {
      const fs = require("fs");
      fs.unlink(files.photo.path, () => {});
    }
    const product = await Product.update(
      {
        name: fields.name,
        description: fields.description,
        photo: "/img/" + imgName,
        stock: fields.stock,
        bestproduct: fields.bestproducts,
        slug: slugify(fields.name, { replacement: "-" }),
        price: fields.price,
      },
      {
        where: {
          id: req.user.id,
        },
      }
    );
    res.json(product);
  });
};
module.exports = { store, index, destroy, update };
