const { check } = require("express-validator");
const validatorMiddlewares = require("../../middlewares/validator");

exports.createChargeValidator = [
  check("name").notEmpty().withMessage("please entre Customer name"),
  check("price").notEmpty().withMessage("please entre your price"),
  validatorMiddlewares,
];