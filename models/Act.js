const mongoose = require("mongoose");

const actSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      Unique: true,
      required: [true, "please entre Act name"],
    },
    familyAct: String,
    price: Number,
    code: String,
    cotations: String,
    traitments: [String],
    color: String,
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Act", actSchema);
