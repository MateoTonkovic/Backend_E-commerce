require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(routes);

app.listen(port, console.log(`Servidor en puerto ${port}`));
