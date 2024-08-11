const { check } = require("express-validator");
const validatorMiddlewares = require("../../middlewares/validator");

exports.createCustomerValidator = [
  check("name").notEmpty().withMessage("please entre Customer name"),
  check("phone").notEmpty().withMessage("please entre Customer phone"),
  validatorMiddlewares,
];
