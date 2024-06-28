const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const ApiError = require("../utils/apiError");
//models
const User = require("../models/User");


// Register a new user
const register = asyncHandler(async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  
  const user = await User.findOne({ email });
  if (user) {
    return next(new ApiError("user already exists!", 400));
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });
  await newUser.save();
  return res.status(200);
});


// Login with an existing user
const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return next(new ApiError("User not found", 404));
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return next(new ApiError("Incorrect password", 404));
  }

  const token = jwt.sign(
    { userId: user._id },
    process.env.SECRET_KEY,
    {
      expiresIn: process.env.EXPIRES_IN,
    }
  );
  res.json({ token });
});

module.exports = { register, login };
