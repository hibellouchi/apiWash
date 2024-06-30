const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    custemer: {
      type: mongoose.Types.ObjectId,
      ref: "Custemer",
    },

    categoryClothe: {
      type: mongoose.Types.ObjectId,
      ref: "CategoryClothe",
    },
    quantity: {
      type: Number,
      required: [true, "please entre quantity"],
    },

    price: {
      type: Number,
      required: [true, "please entre price"],
    },

    status: {
      type: String,
      required: [true, "please entre status"],
      enum: ["processing", "completed", "cancel"],
      default: "processing",
    },
    isActive: { type: Boolean, default: true },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
