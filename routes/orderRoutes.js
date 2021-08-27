const orderController = require("../controllers/orderController");
const express = require("express");
const orderRoutes = express.Router();
const tokenVerification = require("../middleware/authMiddleware");

orderRoutes.get("/", tokenVerification, orderController.index);
orderRoutes.post("/", tokenVerification, orderController.store);
orderRoutes.delete("/", tokenVerification, orderController.destroy);
orderRoutes.patch("/", tokenVerification, orderController.update);

module.exports = orderRoutes;
