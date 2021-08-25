const { User, Admin } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

async function store(req, res) {
  const user = await User.create(req.body);
  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET
  );
  res.json({ accesToken: token });
}

async function login(req, res) {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (!user) return res.sendStatus(404);
  if (!bcrypt.compareSync(req.body.password, user.password))
    return res.sendStatus(403);

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET
  );

  res.json({ accesToken: token });
}

async function update(req, res) {
  const userExists = await User.findByPk(req.user.id);
  if (!userExists) return res.sendStatus(404);
  if (req.body.email !== userExists.email) return res.sendStatus(403);
  const user = await User.update(req.body, {
    where: { id: req.user.id },
  });
  res.sendStatus(200);
}

async function destroy(req, res) {
  const admin = await Admin.findByPk(req.user.id);
  if (admin.id === req.user.id) {
    await User.destroy({ where: { id: req.body.id } });
    return res.sendStatus(200);
  }

  if (Number(req.user.id) !== Number(req.body.id)) return res.sendStatus(403);
  await User.destroy({ where: { id: req.body.id } });
  res.sendStatus(200);
}

async function show(req, res) {

  const users = await User.findAll();
  res.json(users);
}

module.exports = { store, login, update, destroy, show };
