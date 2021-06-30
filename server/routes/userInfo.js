const router = require("express").Router();

router.get("/userInfo", () => {
  res.send("cool");
});

module.exports = router;
