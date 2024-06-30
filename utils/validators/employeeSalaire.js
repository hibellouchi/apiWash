const { check } = require("express-validator");
const validatorMiddlewares = require("../../middlewares/validator");
const Employee = require("../../models/Employee");
exports.employeeSalaireValidator = [
  check("employee").notEmpty().withMessage("please entre Employee name"),
  check("salaire").notEmpty().withMessage("please entre Employee salaire"),
  validatorMiddlewares,
];
