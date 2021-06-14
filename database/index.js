const Pool = require("pg").Pool;

const db = new Pool({
  user: "gareth",
  host: "localhost",
  database: "frsdb",
  password: "Constantine123!@#",
  port: 5432,
});

module.exports = db;
