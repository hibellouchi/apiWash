const mongoose = require("mongoose");

const chargeSchema = new mongoose.Schema(
  {
    name: {
      type: String,

      required: [true, "please entre your name"],
    },
    price: {
      type: Number,

      required: [true, "please entre your price"],
    },

    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Charge", chargeSchema);
