const adminController = require("../controllers/adminController");
const express = require("express");
const adminRoutes = express.Router();
const tokenVerification = require("../middleware/authMiddleware");


adminRoutes.post("/token", adminController.login);
adminRoutes.get("/", tokenVerification, adminController.show);
adminRoutes.delete("/", tokenVerification, adminController.destroy);

module.exports = adminRoutes;
