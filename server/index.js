const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
const passport = require("passport");
const db = require("../database/index.js");
const bycrypt = require("bycrypt");
const saltRounds = 10;

app.use(express.urlencoded({ extended: false }));
app.use(express.static("./client/public"));

app.get("/", (req, res) => {
  res.send("hey");
});

app.get("/users/register", (req, res) => {
  res.send("register");
});

app.get("/users/login", (req, res) => {
  //check for username in DB
  //bcrypt.compare(password, result[0].password), cb)
});

app.post("/users/register", (req, res) => {
  let { lastName, firstName, email, password, retypePassword, phoneNumber } =
    req.body;

  let errors = [];

  if (
    !lastName ||
    !firstName ||
    !email ||
    !password ||
    !retypePassword ||
    !phoneNumber
  ) {
    errors.push("Please enter all fields");
  }
  if (password.length < 6) {
    errors.push("Password should be at least 6 characters");
  }
  if (password !== retypePassword) {
    errors.push("Passwords do not match");
  }
  const hashed = bycrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    } else {
      //log user info with hashed password into PSQL DB
    }
  });
});

app.get("/users", (req, res) => {
  db.query("select * from users", (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send(result.rows);
    }
  });
});

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

app.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
app.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("/");
  }
);

app.listen(port, () => {
  console.log("node is listening");
});
