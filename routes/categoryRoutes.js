const express = require("express");
const categoryController = require("../controllers/categoryController");
const tokenVerification = require("../middleware/authMiddleware");
const categoryRoutes = express.Router();

categoryRoutes.post("/", tokenVerification, categoryController.store);
categoryRoutes.get("/", categoryController.index);
categoryRoutes.delete("/", tokenVerification, categoryController.destroy);
categoryRoutes.patch("/", tokenVerification, categoryController.update)

module.exports = categoryRoutes;
