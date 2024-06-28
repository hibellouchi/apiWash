const asyncHandler = require("express-async-handler");

// Request get search
exports.reqGetCategoryClothe = asyncHandler(async (req, res, next) => {
  const { keyword } = req.body;
  let query = {};

  query.$or = [{ name: { $regex: keyword, $options: "i" }, isActive: true }];

  req.query = query;
  next();
});

// Request create
exports.reqCreateCategoryClothe = asyncHandler(async (req, res, next) => {
  req.body = {
    name: req.body.name,
    price: req.body.price,
  };
  next();
});

// Request edit
exports.reqEditeCategoryClothe = asyncHandler(async (req, res, next) => {
  req.body = {
    name: req.body.name,
    price: req.body.price,
  };
  next();
});
