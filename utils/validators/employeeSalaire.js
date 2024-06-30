const { check } = require("express-validator");
const validatorMiddlewares = require("../../middlewares/validator");
const Employee = require("../../models/Employee");
exports.employeeSalaireValidator = [
  check("employee")
    .notEmpty()
    .withMessage("please entre employee")
    .isMongoId()
    .withMessage("invaled id")
    .custom((employeeId) =>
      Employee.findById(employeeId).then((employee) => {
        if (!employee) {
          return Promise.reject(
            new Error(`No employee for this id : ${employeeId}`)
          );
        }
      })
    ),
  validatorMiddlewares,
];
