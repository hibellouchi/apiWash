const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: [true, "please entre firstName"],
      lowercase: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: [true, "please entre lastName"],
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, "please entre email"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "please entre password"],
      minlength: [6, "To short password"],
    },

    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
