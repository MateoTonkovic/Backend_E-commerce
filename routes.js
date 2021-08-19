const express = require("express");
const userController = require("./controllers/userController");
const adminController = require("./controllers/adminController");
const productController = require("./controllers/productController");
const router = express.Router();
// const templateCotroller = require("./controllers/templateCotroller");
const tokenVerification = require("./middleware/authMiddleware");
// const getUsers = require("./mysqlConection");

router.post("/api/register", userController.store);
router.post("/api/login", userController.login);
router.post("/api/update", tokenVerification, userController.update);
router.post("/api/destroy", tokenVerification, userController.destroy);
// router.get("/", usersController.home);
// router.get("/usuarios", usersController.index);
// router.post("/usuarios", usersController.create);
// router.get("/usuarios/eliminar/:id", usersController.destroy);
// router.get("/usuarios/modificar/:id", usersController.editingSite);
// router.post("/usuarios/modificar", usersController.edit);
router.post("/api/admin/login", adminController.login);

//RUTAS DE PRODUCTOS
router.get("/products", productController.index);
router.post("/products", productController.store);

module.exports = router;
