const adminController = require("../controllers/adminController");
const express = require("express");
const adminRoutes = express.Router();

adminRoutes.post("/login", adminController.login);

module.exports = adminRoutes;
