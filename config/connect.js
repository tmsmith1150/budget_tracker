var mysql = require("mysql");
require('dotenv').config();


var connection;

if (process.env.JAWSDB_URL) {
  // console.log("\n\n\n using JAWS \n\n\n");
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.db_password,
    database: "budgetTracker_db"
  });
};


connection.connect();

module.exports = connection;
