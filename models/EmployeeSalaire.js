const mongoose = require("mongoose");

const employeeSalaireSchema = new mongoose.Schema(
  {
    employee: {
      type: mongoose.Types.ObjectId,
      ref: "Employee",
    },
    salaire: {
      type: Number,
      required: [true, "please entre salaire"],
    },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("EmployeeSalaire", employeeSalaireSchema);
