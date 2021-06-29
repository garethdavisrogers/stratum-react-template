const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

app.use(express.json());
app.use(cors());

app.use("/auth", require("./routes/jwtAuth"));
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

// let errors = [];

// if (
//   !lastName ||
//   !firstName ||
//   !email ||
//   !password ||
//   !retypePassword ||
//   !phoneNumber
// ) {
//   errors.push("Please enter all fields");
// }
// if (password.length < 6) {
//   errors.push("Password should be at least 6 characters");
// }
// if (password !== retypePassword) {
//   errors.push("Passwords do not match");
// }
