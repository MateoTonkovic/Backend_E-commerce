const { User } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

async function store(req, res) {
  const user = await User.create(req.body);
  const token = jwt.sign(user.id, process.env.JWT_SECRET);
  res.json({ user: user, accesToken: token });
}

async function login(req, res) {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (!user) return res.sendStatus(404);
  if (!bcrypt.compareSync(req.body.password, user.password))
    return res.sendStatus(403);

  const token = jwt.sign(user.id, process.env.JWT_SECRET);
  res.json({ user: user, accesToken: token });
}

async function update(req, res) {
  await User.update(req.body, {
    where: { email: req.body.email },
  });
  res.sendStatus(200);
}

module.exports = { store, login, update };
