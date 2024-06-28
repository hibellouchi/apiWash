const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    custemer: {
      type: mongoose.Types.ObjectId,
      ref: "Custemer",
    },
    clothes: [
      {
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
      },
    ],

    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
