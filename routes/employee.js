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
const Employee = require("../models/Employee");

//id validator
const { idValidator } = require("../utils/validators/idValidator");

//validator
const { createEmployeeValidator } = require("../utils/validators/employee");

//reqHandel
const {
  reqGetEmployee,
  reqCreateEmployee,
  reqEditeEmployee,
} = require("../services/employee");

// get all Customer
router
  .route(`/all`)
  .post(reqGetEmployee, getAll(Employee, "name,phone,cin,adress"));
// get one Customer
router
  .route(`/get/:id`)
  .post(idValidator, getOne(Employee, "name,phone,cin,adress"));

// create new Customer
router
  .route(`/add`)
  .post(createEmployeeValidator, reqCreateEmployee, createOne(Employee));

//edit Customer
router.route(`/edit/:id`).put(idValidator, reqEditeEmployee, editOne(Employee));
//delete Customer
router.route(`/delete/:id`).put(idValidator, deleteOne(Employee));

module.exports = router;
