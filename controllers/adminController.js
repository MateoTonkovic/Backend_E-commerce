const { Admin } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

async function login(req, res) {
  const admin = await Admin.findOne({ where: { email: req.body.email } });
  if (!admin) return res.sendStatus(404);

  if (!bcrypt.compareSync(req.body.password, admin.password))
    return res.sendStatus(403);

  const token = jwt.sign(
    { id: admin.id, email: admin.email },
    process.env.JWT_SECRET
  );
  res.json({ accesToken: token });
}

async function show(req, res) {
  const admin = await Admin.findByPk(req.user.id);
  if (!admin) {
    return res.sendStatus(403);
  }
  const admins = await Admin.findAll();
  res.json(admins);
}
async function destroy(req, res) {
  const admin = await Admin.findByPk(req.user.id);
  if (!admin) {
    return res.sendStatus(403);
  }

  if (admin.id === req.user.id) {
    await Admin.destroy({ where: { id: req.body.id } });
    return res.sendStatus(200);
  }

  if (Number(req.user.id) !== Number(req.body.id)) return res.sendStatus(403);
  await Admin.destroy({ where: { id: req.body.id } });
  res.sendStatus(200);
}

module.exports = {
  login,
  show,
  destroy,
};
