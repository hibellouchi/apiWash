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

    role: { type: String, enum: ["user", "admin"], default: "user" },
    cabinet: {
      type: mongoose.Types.ObjectId,
      ref: "CabinetSetting",
      required: false,
    },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
