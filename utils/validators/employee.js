const { check } = require("express-validator");
const validatorMiddlewares = require("../../middlewares/validator");

exports.createEmployeeValidator = [
  check("name").notEmpty().withMessage("please entre Employee name"),
  check("phone").notEmpty().withMessage("please entre Employee phone"),
  check("adress").notEmpty().withMessage("please entre Employee adress"),
  check("cin").notEmpty().withMessage("please entre Employee cin"),
  validatorMiddlewares,
];
