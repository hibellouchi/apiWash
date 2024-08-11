const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

// Request get search
exports.reqGetCustomer = asyncHandler(async (req, res, next) => {
  const { keyword } = req.body;
  let query = {};
  console.log(req.user.userId);
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
exports.reqCreateCustomer = asyncHandler(async (req, res, next) => {
  req.body = {
    name: req.body.name,
    phone: req.body.phone,
    userId: req.user.userId,
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
