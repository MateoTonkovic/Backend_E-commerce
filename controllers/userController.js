const { User } = require("../models");

async function store(req, res) {
  User.create(req.body);
  res.sendStatus(200);
}

module.exports = { store };
