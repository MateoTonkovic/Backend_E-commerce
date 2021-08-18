require("dotenv").config();

const express = require("express");
const app = express();
const routes = require("./routes");
const dbInitialSetup = require("./dbInitialSetup");
const cors = require("cors");

app.use(express.static("public"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

// dbInitialSetup(); // Crea tablas e inserta datos de prueba.

app.listen(
  process.env.DB_PORT,
  console.log(`Servidor en puerto ${process.env.DB_PORT}`)
);
