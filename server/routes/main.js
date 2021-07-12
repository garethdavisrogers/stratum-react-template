const router = require("express").Router();
const pool = require("../../database/index");
const authorization = require("../middleware/authorization");

router.get("/main", authorization, async (req, res) => {
  try {
    console.log(req.user);
    const user = await pool.query(
      "select user_last_name, user_first_name from users where user_id = $1",
      [req.user.id]
    );

    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
});
module.exports = router;
