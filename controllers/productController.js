const { Admin, Product, User } = require("../models");
const formidable = require("formidable");
const slugify = require("slugify");
const { createClient } = require("@supabase/supabase-js");

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
      },
      { new: true }
    );
    const supabase = createClient(
      "https://unyvfpzstnadbdhkxhbb.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjI5NzI2ODc3LCJleHAiOjE5NDUzMDI4Nzd9.OVxPQwXN-5qMGGCT8Pk49MuPEflhzb83MYejJppCbag"
    );
    const { data, error } = await supabase.storage
      .from("papos.photos")
      .upload(`images/${files.photo.name}`, files.photo, {
        cacheControl: "3600",
        upsert: false,
      });
    console.log(data);
    console.log(error);

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
    // const imgName = path.basename(files.photo.path);
    // if (files.photo.name === "") {
    //   const fs = require("fs");
    //   fs.unlink(files.photo.path, () => {});
    // }

    const product = await Product.update(
      {
        name: fields.name,
        description: fields.description,
        // photo: "/img/" + imgName,
        stock: fields.stock,
        bestproduct: fields.bestproduct,
        // slug: slugify(fields.name, { replacement: "-" }),
        price: fields.price,
      },
      {
        where: {
          id: fields.id,
        },
      }
    );
    res.json(product);
  });
};
module.exports = { store, index, destroy, update, show };
