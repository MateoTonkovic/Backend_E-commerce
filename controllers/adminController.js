const { User, Admin } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

async function login(req, res) {
  const admin = await Admin.findOne({ where: { email: req.body.email } });
  if (!admin) return res.sendStatus(404);
  console.log(req.body.password);
  if (!bcrypt.compareSync(req.body.password, admin.password))
    return res.sendStatus(403);

  const token = jwt.sign(
    { id: admin.id, email: admin.email },
    process.env.JWT_SECRET
  );

  res.json({ admin, accesToken: token });
}

module.exports = {
  login,
};
