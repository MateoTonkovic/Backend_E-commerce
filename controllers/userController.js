const { User } = require("../models");

async function store(req, res) {
  User.create({ name: req.body.name });
  res.status(200);
}

module.exports = { store };