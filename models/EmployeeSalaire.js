const mongoose = require("mongoose");

const employeeSalaireSchema = new mongoose.Schema(
  {
    employee: {
      type: String,
      lowercase: true,
      required: [true, "please entre salaire"],
    },
    price: {
      type: Number,
      required: [true, "please entre salaire"],
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

module.exports = mongoose.model("EmployeeSalaire", employeeSalaireSchema);
