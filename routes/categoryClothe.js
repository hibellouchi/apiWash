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

const CategoryClothe = require("../models/CategoryClothe");

//id validator
const { idValidator } = require("../utils/validators/idValidator");

//validator
const {
  createCategoryClotheValidator,
} = require("../utils/validators/categoryClothe");

//reqHandel
const {
  reqGetCategoryClothe,
  reqCreateCategoryClothe,
  reqEditeCategoryClothe,
} = require("../services/categoryClothe");

// get all Customer
router
  .route(`/all`)
  .post(reqGetCategoryClothe, getAll(CategoryClothe, "name,price"));
// get one Customer
router
  .route(`/get/:id`)
  .post(idValidator, getOne(CategoryClothe, "name,price"));
// create new Customer
router
  .route(`/add`)
  .post(
    createCategoryClotheValidator,
    reqCreateCategoryClothe,
    createOne(CategoryClothe)
  );
//edit Customer
router
  .route(`/edit/:id`)
  .put(idValidator, reqEditeCategoryClothe, editOne(CategoryClothe));
//delete Customer
router.route(`/delete/:id`).put(idValidator, deleteOne(CategoryClothe));

module.exports = router;
