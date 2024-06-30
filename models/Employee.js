const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      lowercase: true,
      required: [true, "please entre Employee name"],
    },
    phone: {
      type: String,

      required: [true, "please entre Employee phone"],
    },
    adress: {
      type: String,

      required: [true, "please entre Employee adress"],
    },
    cin: {
      type: String,

      required: [true, "please entre Employee cin"],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Employee", employeeSchema);
