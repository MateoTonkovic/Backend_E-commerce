const express = require("express");
const templateController = require("./controllers/userController");
const router = express.Router();
// const templateCotroller = require("./controllers/templateCotroller");

// const getUsers = require("./mysqlConection");

router.post("/api/register", templateController.store);
// router.get("/", usersController.home);
// router.get("/usuarios", usersController.index);
// router.post("/usuarios", usersController.create);
// router.get("/usuarios/eliminar/:id", usersController.destroy);
// router.get("/usuarios/modificar/:id", usersController.editingSite);
// router.post("/usuarios/modificar", usersController.edit);

module.exports = router;
