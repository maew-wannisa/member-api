const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    position: String,
    salary: Number,
    age: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
