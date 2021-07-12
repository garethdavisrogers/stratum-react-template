const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const cors = require("cors");
const jwtAuth = require("./routes/jwtAuth");
const main = require('./routes/main');

app.use(express.json());
app.use(cors());
app.use("/auth", jwtAuth);
app.use('/', main);
app.use(express.static("./client/public"));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

app.listen(port, () => {
  console.log("node is listening");
});
