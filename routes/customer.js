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

const Customer = require("../models/Customer");

//id validator
const { idValidator } = require("../utils/validators/idValidator");

//validator
const { createCustomerValidator } = require("../utils/validators/customer");

//reqHandel
const {
  reqGetCustomer,
  reqCreateCustomer,
  reqEditeCustomer,
} = require("../services/customer");

// get all Customer
router.route(`/all`).post(reqGetCustomer, getAll(Customer, "name,phone"));
// get one Customer
router.route(`/:id`).post(idValidator, getOne(Customer, "name,phone"));
// create new Customer
router
  .route(`/add`)
  .post(createCustomerValidator, reqCreateCustomer, createOne(Customer));
//edit Customer
router.route(`/edit/:id`).put(idValidator, reqEditeCustomer, editOne(Customer));
//delete Customer
router.route(`/delete/:id`).put(idValidator, deleteOne(Customer));

module.exports = router;
