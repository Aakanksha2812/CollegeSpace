const mongoose = require("mongoose");
const User = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordd: { type: String, required: true },
  },
  {
    collection: "user-data",
  }
);
const model = mongoose.model("UserData", User);
module.exports = model;
