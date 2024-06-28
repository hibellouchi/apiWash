const asyncHandler = require("express-async-handler");

// Request get search
exports.reqGetCustomer = asyncHandler(async (req, res, next) => {
  const { keyword } = req.body;
  let query = {};

  query.$or = [{ name: { $regex: keyword, $options: "i" }, isActive: true }];

  req.query = query;
  next();
});

// Request create
exports.reqCreateCustomer = asyncHandler(async (req, res, next) => {
  req.body = {
    name: req.body.name,
    phone: req.body.phone,
  };
  next();
});

// Request edit
exports.reqEditeCustomer = asyncHandler(async (req, res, next) => {
  req.body = {
    name: req.body.name,
    phone: req.body.phone,
  };
  next();
});
