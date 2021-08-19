const { Admin, Product, User } = require("../models");
const formidable = require("formidable");

const store = async (req, res) => {
  const form = formidable({
    multiples: false,
    uploadDir: "./public/img",
    keepExtensions: true,
  });
  form.parse(req, async (err, fields, files) => {
    console.log(files.image);
    const path = require("path");
    const imgName = path.basename(files.image.path);
    if (files.image.name === "") {
      const fs = require("fs");
      fs.unlink(files.image.path, () => {});
    }

    // const [user, created] = await User.findOrCreate({
    //   where: {
    //     email: fields.email,
    //   },
    //   defaults: {
    //     firstname: fields.firstname,
    //     lastname: fields.lastname,
    //   },
    // });
    const product = await Product.create(
      {
        name: fields.name,
        description: fields.description,
        photo: "/img/" + imgName,
        stock: fields.stock,
        bestproduct: fields.bestproducts,
        slug: fields.slug,
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
module.exports = { store, index, destroy };
