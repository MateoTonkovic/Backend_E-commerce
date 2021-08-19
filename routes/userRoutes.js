const userController = require("../controllers/userController");
const express = require("express");
const userRouter = express.Router();
const tokenVerification = require("../middleware/authMiddleware");

userRouter.post("/register", userController.store);
userRouter.post("/login", userController.login);
userRouter.post("/update", tokenVerification, userController.update);
userRouter.post("/destroy", tokenVerification, userController.destroy);

module.exports = userRouter;
