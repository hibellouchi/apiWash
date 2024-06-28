const asyncHandler = require("express-async-handler");

// Request get search
exports.reqGetCharge = asyncHandler(async (req, res, next) => {
  const { keyword } = req.body;
  let query = {};

  query.$or = [{ name: { $regex: keyword, $options: "i" }, isActive: true }];

  req.query = query;
  next();
});

// Request create
exports.reqCreateCharge = asyncHandler(async (req, res, next) => {
  req.body = {
    custemer: req.body.custemer,
    clothes: req.body.clothes,
    $push: {
      clothes: req.body.clothes,
    },
  };
  next();
});

// Request edit
exports.reqEditeCharge = asyncHandler(async (req, res, next) => {
  req.body = {
    name: req.body.name,
    price: req.body.price,
  };
  next();
});
