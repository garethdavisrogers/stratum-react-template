const jwt = require("jsonwebtoken");
require("dotenv").config();

const authorization = async (req, res, next) => {
  const jwtToken = req.header("token");

  if (!jwtToken) {
    return res.status(403).json("Not Authorized");
  }
  try {
    const payload = jwt.verify(jwtToken, process.env.SECRET);

    req.user = payload.user;
    next();
  } catch (err) {
    console.error(err.message);
    return res.status(403).json("Not Authorized");
  }
};

module.exports = authorization;
