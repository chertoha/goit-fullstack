const { Schema, model } = require("mongoose");

const User = new Schema({
  password: {
    type: String,
    required: [true, "Set password for user"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Such email already existed"],
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter",
  },
  token: String,
  avatarURL: String,

  verify: {
    type: Boolean,
    default: false,
  },

  verificationToken: {
    type: String,
    required: [true, "Verify token is required"],
  },
});

module.exports = model("User", User);
