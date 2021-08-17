const mysql = require("mysql2/promise");
async function mysqlConection() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  return connection;
}

module.exports = mysqlConection();
