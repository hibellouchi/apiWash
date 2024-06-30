const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
// Request get search
exports.reqGetOrder = asyncHandler(async (req, res, next) => {
  const { keyword } = req.body;
  let query = {};

  query.$or = [
    {
      customer: { $regex: keyword, $options: "i" },
      isActive: true,
      userId: new mongoose.Types.ObjectId(req.user.userId),
    },
  ];

  req.query = query;
  next();
});

// Request create
exports.reqCreateOrder = asyncHandler(async (req, res, next) => {
  req.body = {
    customer: req.body.customer,
    categoryClothe: req.body.categoryClothe,
    quantity: req.body.quantity,
    price: req.body.price,
    status: req.body.status,
    userId: req.user.userId,
  };
  next();
});

// Request edit
exports.reqEditeOrder = asyncHandler(async (req, res, next) => {
  req.body = {
    customer: req.body.customer,
    categoryClothe: req.body.categoryClothe,
    quantity: req.body.quantity,
    price: req.body.price,
    status: req.body.status,
  };
  next();
});
