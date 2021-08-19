const express = require("express");
const userController = require("./controllers/userController");
const productController = require("./controllers/productController");
const router = express.Router();
// const templateCotroller = require("./controllers/templateCotroller");

// const getUsers = require("./mysqlConection");

router.post("/api/register", userController.store);
router.post("/api/login", userController.login);
router.post("/api/update", userController.update);
// router.get("/", usersController.home);
// router.get("/usuarios", usersController.index);
// router.post("/usuarios", usersController.create);
// router.get("/usuarios/eliminar/:id", usersController.destroy);
// router.get("/usuarios/modificar/:id", usersController.editingSite);
// router.post("/usuarios/modificar", usersController.edit);

//RUTAS DE PRODUCTOS
router.post("/products", productController.store);

module.exports = router;
