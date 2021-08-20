const orderController = require("../controllers/orderController");
const express = require("express");
const orderRoutes = express.Router();
const tokenVerification = require("../middleware/authMiddleware");

orderRoutes.get("/", orderController.index);
orderRoutes.post("/", orderController.store);
orderRoutes.delete("/", tokenVerification, orderController.destroy);
orderRoutes.patch("/", tokenVerification, orderController.update);

module.exports = orderRoutes;
