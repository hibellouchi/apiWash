const mongoose = require("mongoose");

const categoryClotheSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      lowercase: true,
      required: [true, "please entre your name"],
    },
    price: {
      type: Number,

      required: [true, "please entre your price"],
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
module.exports = mongoose.model("CategoryClothe", categoryClotheSchema);
