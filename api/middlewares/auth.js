const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const ApiError = require("../utils/apiError");
//models
const User = require("../models/User");

const authenticate = asyncHandler(async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return next(new ApiError("Authentication required", 401));
  }

  const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
  const user = {
    userId: decodedToken.userId,
    email: decodedToken.email,
    firstName: decodedToken.firstName,
  };
  if (!user) {
    return next(new ApiError("User not found", 404));
  }

  req.user = user;
  next();
});

module.exports = { authenticate };
