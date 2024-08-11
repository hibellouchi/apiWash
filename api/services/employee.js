const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
// Request get search
exports.reqGetEmployee = asyncHandler(async (req, res, next) => {
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
exports.reqCreateEmployee = asyncHandler(async (req, res, next) => {
  req.body = {
    name: req.body.name,
    phone: req.body.phone,
    cin: req.body.cin,
    adress: req.body.adress,
    userId: req.user.userId,
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
