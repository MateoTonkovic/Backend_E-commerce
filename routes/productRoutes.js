const productController = require("../controllers/productController");
const express = require("express");
const productRoutes = express.Router();
const tokenVerification = require("../middleware/authMiddleware");

productRoutes.get("/", productController.index);
productRoutes.post("/", productController.store);
productRoutes.post("/destroy", tokenVerification, productController.destroy);
productRoutes.patch("/", tokenVerification, productController.update);

module.exports = productRoutes;
