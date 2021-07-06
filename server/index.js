const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const cors = require("cors");
const jwtAuth = require("./routes/jwtAuth");

app.use(express.json());
app.use(cors());
app.use("/auth", jwtAuth);
app.use(express.static("./client/public"));
app.get("/activate", (req, res) => {
  // client.messages
  //   .create({
  //     body: "Gareth is testing SMS capabilities",
  //     from: "+12562693589",
  //     to: "+14784612233",
  //   })
  //   .then((message) => {
  //     res.send(message.sid);
  //   })
  //   .catch((error) => {
  //     throw error;
  //   });
  res.send("received");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

app.listen(port, () => {
  console.log("node is listening");
});
