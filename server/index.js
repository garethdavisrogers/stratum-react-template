const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const jwtAuth = require("./routes/jwtAuth");
const userInfo = require("./routes/userInfo");

app.use(express.json());
app.use(cors());
app.use("/auth", jwtAuth);
app.use("/userInfo", userInfo);
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

app.listen(port, () => {
  console.log("node is listening");
});
