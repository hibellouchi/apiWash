const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
// Request get search
exports.reqGetCharge = asyncHandler(async (req, res, next) => {
  const { keyword } = req.body;
  let query = {};

  query.$or = [
    {
      name: { $regex: keyword, $options: "i" },
      isActive: true,
      userId: new mongoose.Types.ObjectId(req.user.userId),
    },
  ];

  req.query = query;
  next();
});

// Request create
exports.reqCreateCharge = asyncHandler(async (req, res, next) => {
  req.body = {
    name: req.body.name,
    price: req.body.price,
    userId: req.user.userId,
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
