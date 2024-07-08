const express = require("express");

const router = express.Router();

//global services
const {
  getAll,
  createOne,
  editOne,
  deleteOne,
  getOne,
} = require("../services/global");

//models

const EmployeeSalaire = require("../models/EmployeeSalaire");

//id validator
const { idValidator } = require("../utils/validators/idValidator");

//validator
const {
  employeeSalaireValidator,
} = require("../utils/validators/employeeSalaire");

//reqHandel
const {
  reqGetEmployeeSalaire,

  reqCreateEmployeeSalaire,
  reqEditeEmployeeSalaire,
} = require("../services/employeeSalaire");

// get all Customer
router
  .route(`/all`)
  .post(
    reqGetEmployeeSalaire,
    getAll(EmployeeSalaire, "employee,price,createdAt")
  );
// get one Customer
router
  .route(`/get/:id`)
  .post(idValidator, getOne(EmployeeSalaire, "emoloyee,price"));
// create new Customer
router
  .route(`/add`)
  .post(
    employeeSalaireValidator,
    reqCreateEmployeeSalaire,
    createOne(EmployeeSalaire)
  );
//edit Customer
router
  .route(`/edit/:id`)
  .put(idValidator, reqEditeEmployeeSalaire, editOne(EmployeeSalaire));
//delete Customer
router.route(`/delete/:id`).put(idValidator, deleteOne(EmployeeSalaire));

module.exports = router;
