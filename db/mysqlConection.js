const mysql = require("mysql2/promise");
async function mysqlConection() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "46095867",
    database: "ha_ejercicio_20",
  });
  return connection;
}

module.exports = mysqlConection();
