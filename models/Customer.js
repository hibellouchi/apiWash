const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please entre customer name"],
    },
    phone: {
      type: String,
      required: [true, "please entre customer phone"],
    },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", customerSchema);
