const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      lowercase: true,
      required: [true, "please entre customer"],
    },

    categoryClothe: {
      type: String,
      required: [true, "please entre categoryClothe"],
    },
    quantity: {
      type: Number,
      required: [true, "please entre quantity"],
    },

    price: {
      type: Number,
      required: [true, "please entre price"],
    },
    total: {
      type: Number,
    },
    status: {
      type: String,
      required: [true, "please entre status"],
      enum: ["No Paid", "Paid", "Canceled"],
      default: "No Paid",
    },
    isActive: { type: Boolean, default: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
