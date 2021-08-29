const { Admin, Product, User } = require("../models");
const formidable = require("formidable");
const slugify = require("slugify");
const { createClient } = require("@supabase/supabase-js");
const fs = require("fs");

const store = async (req, res) => {
  const admin = await Admin.findByPk(req.user.id);
  if (!admin) {
    return res.sendStatus(403);
  }
  const form = formidable({
    multiples: false,
    keepExtensions: true,
  });
  form.parse(req, async (err, fields, files) => {
    if (files.photo.name === "") {
      const fs = require("fs");
      fs.unlink(files.photo.path, () => {});
    }

    const product = await Product.create(
      {
        name: fields.name,
        description: fields.description,
        photo: files.photo.name,
        stock: fields.stock,
        bestproduct: fields.bestproduct,
        slug: slugify(fields.name, { replacement: "-" }),
        price: fields.price,
        categoryId: fields.categoryId,
      },
      { new: true }
    );
    const supabase = createClient(
      `${process.env.SUPABASE_URL}, ${process.env.SUPABASE_TOKEN}`
    );

    await supabase.storage
      .from("papos")
      .upload(`image/${files.photo.name}`, fs.createReadStream(files.photo.path), {
        cacheControl: "3600",
        upsert: false,
        contentType: files.photo.type,
      });

    res.json(product);
    /*     sendMail(fields.title, fields.content); */
  });
};

const index = async (req, res) => {
  const product = await Product.findAll();
  res.json(product);
};
const show = async (req, res) => {
  const product = await Product.findOne({ where: { slug: req.params.slug } });
  res.status(200).json(product);
};

const destroy = async (req, res) => {
  const admin = await Admin.findByPk(req.user.id);
  if (!admin) {
    return res.sendStatus(403);
  }
  const product = await Product.findOne({ where: { id: req.body.id } });
  await Product.destroy({ where: { id: req.body.id } });

  const supabase = createClient(
    `${process.env.SUPABASE_URL}, ${process.env.SUPABASE_TOKEN}`
  );
  await supabase.storage.from("papos").remove([`image/${product.photo}`]);

  return res.sendStatus(200);
};

const update = async (req, res) => {
  const admin = await Admin.findByPk(req.user.id);
  if (!admin) {
    return res.sendStatus(403);
  }
  const product = await Product.findOne({ where: { id: req.body.id } }); //fijarse le mandamos el id o el name(linea 119) por el body
  const form = formidable({
    multiples: false,
    keepExtensions: true,
  });
  form.parse(req, async (err, fields, files) => {
    if (files.photo.name === "") {
      const fs = require("fs");
      fs.unlink(files.photo.path, () => {});
    }
    const product = await Product.update(
      {
        name: fields.name,
        description: fields.description,
        photo: files.photo.name,
        stock: fields.stock,
        bestproduct: fields.bestproduct,
        slug: slugify(fields.name, { replacement: "-" }),
        price: fields.price,
        categoryId: fields.categoryId,
      },
      {
        where: {
          id: fields.id,
        },
      }
    );
    const supabase = createClient(
      `${process.env.SUPABASE_URL}, ${process.env.SUPABASE_TOKEN}`
    );
    await supabase.storage
      .from("papos")
      .upload(`image/${files.photo.name}`, fs.createReadStream(files.photo.path), {
        cacheControl: "3600",
        upsert: false,
        contentType: files.photo.type,
      });
    await supabase.storage.from("papos").remove([`image/${req.body.name}`]); //Chequear que se envía name de photo en el body

    res.json(product);
    /*     sendMail(fields.title, fields.content); */
  });
};

const bestProduct = async (req, res) => {
  const admin = await Admin.findByPk(req.user.id);
  if (!admin) {
    return res.sendStatus(403);
  }
  const product = await Product.update(
    { bestproduct: req.body.bestProduct },
    { where: { id: req.body.id } }
  );
  res.json(product);
};
module.exports = { store, index, destroy, update, show, bestProduct };
