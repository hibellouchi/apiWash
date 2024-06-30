const express = require("express");

const router = express.Router();

//global services
const {
  getAll,
  createOne,
  editOne,
  deleteOne,
  getOne,
  getTotalPrice,
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

// sum price all charge
router.route(`/sum`).post(getTotalPrice(Charge, "price"));

// get all charge
router.route(`/all`).post(reqGetCharge, getAll(Charge, "name,price,createdAt"));
// get one charge
router.route(`/get/:id`).post(idValidator, getOne(Charge, "name,price"));
// create new charge
router
  .route(`/add`)
  .post(createChargeValidator, reqCreateCharge, createOne(Charge));
//edit charge
router.route(`/edit/:id`).put(idValidator, reqEditeCharge, editOne(Charge));
//delete charge
router.route(`/delete/:id`).put(idValidator, deleteOne(Charge));

module.exports = router;
