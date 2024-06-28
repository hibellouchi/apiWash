const { check } = require("express-validator");
const validatorMiddlewares = require("../../middlewares/validator");

exports.createActValidator = [
  check("name").notEmpty().withMessage("please entre act name"),
  validatorMiddlewares,
];
