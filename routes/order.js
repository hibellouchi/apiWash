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

const Order = require("../models/Order");

//id validator
const { idValidator } = require("../utils/validators/idValidator");

//validator
const { orderValidator } = require("../utils/validators/order");

//reqHandel
const {
  reqGetOrder,
  reqCreateOrder,
  reqEditeOrder,
} = require("../services/order");

// get all Customer
router
  .route(`/all`)
  .post(
    reqGetOrder,
    getAll(Order, "customer,categoryClothe,price,quantity,status")
  );
// get one Customer
router
  .route(`/get/:id`)
  .post(
    idValidator,
    getOne(Order, "customer,categoryClothe,price,quantity,clothe,status")
  );
// create new Customer
router.route(`/add`).post(orderValidator, reqCreateOrder, createOne(Order));
//edit Customer
router.route(`/edit/:id`).put(idValidator, reqEditeOrder, editOne(Order));
//delete Customer
router.route(`/delete/:id`).put(idValidator, deleteOne(Order));

module.exports = router;
