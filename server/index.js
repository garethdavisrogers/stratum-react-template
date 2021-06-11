const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

app.use(express.static("./client/public"));

app.get("/", (req, res) => {
  res.send("hey");
});

app.get("/activate", (req, res) => {
  client.messages
    .create({
      body: "Emergency services have been notified",
      from: "+12562693589",
      to: "+14785503644",
    })
    .then((message) => console.log(message.sid));
});

app.listen(port, () => {
  console.log("node is listening");
});
