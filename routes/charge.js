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

const Charge = require("../models/Charge");

//id validator
const { idValidator } = require("../utils/validators/idValidator");

//validator
const { createChargeValidator } = require("../utils/validators/charge");

//reqHandel
const {
  reqGetCharge,
  reqCreateCharge,
  reqEditeCharge,
} = require("../services/charge");

// get all Customer
router.route(`/all`).post(reqGetCharge, getAll(Charge, "name,price"));
// get one Customer
router.route(`/:id`).post(idValidator, getOne(Charge, "name,price"));
// create new Customer
router
  .route(`/add`)
  .post(createChargeValidator, reqCreateCharge, createOne(Charge));
//edit Customer
router.route(`/edit/:id`).put(idValidator, reqEditeCharge, editOne(Charge));
//delete Customer
router.route(`/delete/:id`).put(idValidator, deleteOne(Charge));

module.exports = router
