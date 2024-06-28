const { check } = require("express-validator");
const validatorMiddlewares = require("../../middlewares/validator");
const Customer = require("../../models/Customer");

exports.orderValidator = [
    check("customer")
      .notEmpty()
      .withMessage("please entre customer")
      .isMongoId()
      .withMessage("invaled id")
      .custom((customerId) =>
        Customer.findById(customerId).then((customer) => {
          if (!customer) {
            return Promise.reject(
              new Error(`No customer for this id : ${customerId}`)
            );
          }
        })
      ),
    validatorMiddlewares,
  ];
