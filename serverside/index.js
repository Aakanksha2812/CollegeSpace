const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/usermodel");
const jwt = require("jsonwebtoken");
//const bcrypt=require('bcrypt')
const path = require("path");
const fileRoute = require("./routes/file");
require("./db/db");
const bcrypt = require("bcryptjs");
const ejs = require("ejs");
const bodyparser = require("body-parser");
app.use(cors());
app.use(express.json());
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    const newPassword = await bcrypt.hash(req.body.passwordd, 10);
    await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      passwordd: newPassword,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate email" });
  }
});
app.post("/api/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      passwordd: req.body.passwordd,
    });
    if (user) {
      const token = jwt.sign(
        {
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
        },
        "secret123"
      );
      return res.json({ status: "ok", user: token });
    } else {
      return res.json({ status: "error", user: false });
    }
  } catch (err) {
    res.json({ status: "error" });
  }
});

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
  });

  if (!user) {
    return { status: "error", error: "Invalid login" };
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.passwordd,
    user.passwordd
  );

  if (isPasswordValid) {
    const token = jwt.sign(
      {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
      },
      "secret123"
    );

    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
});

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(fileRoute);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});
app.listen(3001, () => {
  console.log("server is started now");
});
