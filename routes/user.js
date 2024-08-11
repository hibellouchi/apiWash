const express = require("express");

const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const ApiError = require("../utils/apiError");
//models
const User = require("../models/User");

const router = express.Router();
const { getOne } = require("../services/global");

router.post(
  "/change-password",
  asyncHandler(async (req, res, next) => {
    const { currPass, newPass } = req.body;
    const { userId } = req.user;
    const user = await User.findById(userId);
    if (!user) {
      return next(new ApiError("User not found", 404));
    }

    const passwordMatch = await bcrypt.compare(currPass, user.password);
    if (!passwordMatch) {
      return next(new ApiError("Incorrect password", 404));
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPass, salt);

    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      { password: hashedPassword },
      { new: true }
    );
    res.status(200);
  })
);

router.route(`/getone/:id`).post(getOne(User, "firstName,lastName,email"));
module.exports = router;
