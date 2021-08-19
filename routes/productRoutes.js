const productController = require("../controllers/productController");
const express = require("express");
const productRoutes = express.Router();

productRoutes.get("/", productController.index);
productRoutes.post("/create", productController.store);

module.exports = productRoutes;
