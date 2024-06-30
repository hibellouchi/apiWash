const { genSalt } = require("bcrypt");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

// Request get all
exports.reqGetEmployeeSalaire = asyncHandler(async (req, res, next) => {
  const { keyword } = req.body;
  let query = {};

  query.$or = [
    {
      employee: { $regex: keyword, $options: "i" },
      isActive: true,
      userId: new mongoose.Types.ObjectId(req.user.userId),
    },
  ];

  req.query = query;
  next();
});

// Request create
exports.reqCreateEmployeeSalaire = asyncHandler(async (req, res, next) => {
  req.body = {
    employee: req.body.employee,
    salaire: req.body.salaire,
    userId: req.user.userId,
  };
  next();
});

// Request edit
exports.reqEditeEmployeeSalaire = asyncHandler(async (req, res, next) => {
  req.body = {
    employee: req.body.employee,
    salaire: req.body.salaire,
  };
  next();
});
