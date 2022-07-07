const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  pic: {
    type: String,
    default:
      "https://www.nicepng.com/ourpic/u2y3a9e6t4o0a9w7_profile-picture-default-png/",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
