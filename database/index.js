const dotenv = require("dotenv").config();
const database = process.env.DB_DATABASE;
const pw = process.env.DB_PASSWORD;
const dbport = process.env.DB_PORT;
const Pool = require("pg").Pool;

const db = new Pool({
  user: "gareth",
  host: "localhost",
  database: database,
  password: pw,
  port: dbport,
});

module.exports = db;
