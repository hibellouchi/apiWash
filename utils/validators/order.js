const { check } = require("express-validator");
const validatorMiddlewares = require("../../middlewares/validator");

exports.orderValidator = [
  check("customer").notEmpty().withMessage("please entre Customer name"),
  check("categoryClothe")
    .notEmpty()
    .withMessage("please entre Category Clothe"),
  check("quantity").notEmpty().withMessage("please entre Quantity"),
  check("price").notEmpty().withMessage("please entre Price"),
  validatorMiddlewares,
];
