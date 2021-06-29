const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    const { lastName, firstName, email, password, phoneNumber, organization } =
      req.body;
    const user = await pool.query("select * from users where email = $1", [
      email,
    ]);

    if (user.rows.length !== 0) {
      return res.status(401).send("User already exists");
    }

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    const bcryptPassword = await bcrypt.hash(password, salt);
    const newUser = await pool.query(
      "insert into users(last_name, first_name, email, password, phone_number, organization) values ($1, $2, $3, $4, $5, $6) returning *",
      [lastName, firstName, email, password, phoneNumber, organization]
    );
    res.json(newUser);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await pool.query("select * from users where user_email = $1", [
      email,
    ]);

    if (user.rows.length === 0) {
      return res.status(401).json("Password or email incorrect");
    }

    const validPassword = await bcrypt.compare(
      password,
      user.rows[0].user_password
    );

    if (!validPassword) {
      return res.status(401).json("Password or Username is incorrect");
    }

    return res.status(200).json("logging in");
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
