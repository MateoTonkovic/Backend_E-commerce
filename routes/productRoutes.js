const productController = require("../controllers/productController");
const express = require("express");
const productRoutes = express.Router();
const tokenVerification = require("../middleware/authMiddleware");

productRoutes.get("/", productController.index);
productRoutes.get("/:slug", productController.show);
productRoutes.post("/", tokenVerification, productController.store);
productRoutes.delete("/", tokenVerification, productController.destroy);
productRoutes.patch("/", tokenVerification, productController.update);
productRoutes.patch("/bestproduct", productController.bestProduct);

module.exports = productRoutes;
