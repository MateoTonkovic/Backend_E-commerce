const userController = require("../controllers/userController");
const express = require("express");
const userRouter = express.Router();
const tokenVerification = require("../middleware/authMiddleware");

userRouter.post("/", userController.store);
userRouter.post("/token", userController.login);
userRouter.patch("/", tokenVerification, userController.update);
userRouter.delete("/", tokenVerification, userController.destroy);
userRouter.get("/", tokenVerification, userController.show);

module.exports = userRouter;
