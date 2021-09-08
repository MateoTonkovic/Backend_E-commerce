const { Category, Admin } = require("../models");
const slugify = require("slugify");

async function store(req, res) {
  const admin = await Admin.findByPk(req.user.id);
  if (!admin) res.sendStatus(403);
  console.log(req.body);
  const category = await Category.create({
    name: req.body.name,
    slug: slugify(req.body.name, { replacement: "-" }),
  });
  res.json(category);
}

async function index(req, res) {
  const categories = await Category.findAll();
  res.json(categories);
}

const destroy = async (req, res) => {
  const admin = await Admin.findByPk(req.user.id);
  if (!admin) {
    return res.sendStatus(403);
  }

  await Category.destroy({ where: { id: req.body.id } });
  return res.sendStatus(200);
};

const update = async (req, res) => {
  const admin = await Admin.findByPk(req.user.id);
  if (!admin) {
    return res.sendStatus(403);
  }

  await Category.update(
    { name: req.body.name, slug: slugify(req.body.name, { replacement: "-" }) },
    { where: { id: req.body.id } }
  );
  res.json(200);
};

module.exports = { store, index, destroy, update };
