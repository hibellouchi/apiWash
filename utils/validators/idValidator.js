const { check } = require("express-validator");
const validatorMiddlewares = require("../../middlewares/validator");

const idValidator = [
  check("id").isMongoId().withMessage("invaled id"),
  validatorMiddlewares,
];

module.exports = { idValidator };
