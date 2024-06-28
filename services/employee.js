const asyncHandler = require("express-async-handler");

// Request get search
exports.reqGetEmployee = asyncHandler(async (req, res, next) => {
  const { keyword } = req.body;
  let query = {};

  query.$or = [{ name: { $regex: keyword, $options: "i" }, isActive: true }];

  req.query = query;
  next();
});

// Request create
exports.reqCreateEmployee = asyncHandler(async (req, res, next) => {
  req.body = {
    name: req.body.name,
    phone: req.body.phone,
    cin: req.body.cin,
    adress: req.body.adress,
  };
  next();
});

// Request edit
exports.reqEditeEmployee = asyncHandler(async (req, res, next) => {
  req.body = {
    name: req.body.name,
    phone: req.body.phone,
    cin: req.body.cin,
    adress: req.body.adress,
  };
  next();
});
