const mongoose = require("mongoose");

mongoose.set('strictQuery', true);
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  otp: String,
  role:String,
  isVerified: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", userSchema);