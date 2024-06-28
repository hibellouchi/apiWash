const asyncHandler = require("express-async-handler");

// Request get search
exports.reqGetOrder = asyncHandler(async (req, res, next) => {
  const { keyword } = req.body;
  let query = {};

  query.$or = [{ name: { $regex: keyword, $options: "i" }, isActive: true }];

  req.query = query;
  next();
});

// Request create
exports.reqCreateOrder = asyncHandler(async (req, res, next) => {
    req.body = {
        custemer: req.body.custemer,
        status: req.body.status,
        clothes: req.body.clothes,
    }
  next();
});

// Request edit
exports.reqEditeOrder = asyncHandler(async (req, res, next) => {
    req.body = {
        custemer: req.body.custemer,
        status: req.body.status,
        $push: {
          clothes: req.body.clothes,
        },
      };
  next();
});