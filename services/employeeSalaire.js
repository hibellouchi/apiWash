const { genSalt } = require("bcrypt");
const asyncHandler = require("express-async-handler");

// Request get search
exports.reqGetEmployeeSalaire = asyncHandler(async (req, res, next) => {
  const { keyword } = req.body;
  let query = {};

  query.$or = [{ name: { $regex: keyword, $options: "i" }, isActive: true }];

  req.query = query;
  next();
});

// Request create
exports.reqCreateEmployeeSalaire = asyncHandler(async (req, res, next) => {
  req.body = {
    employee: req.body.employee,
    salaire: req.body.salaire,
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
