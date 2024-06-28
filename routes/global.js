const express = require("express");
const asyncHandler = require("express-async-handler");

const router = express.Router();

const { createAct } = require("../services/act");

//validation
const { createActValidator } = require("../utils/validators/act");
//global services
const { getAll, createOne, editOne } = require("../services/global");

//models
const Disease = require("../models/Disease");
const Act = require("../models/Act");
const Drug = require("../models/Drug");
const Allergie = require("../models/Allergie");
const Insurance = require("../models/Insurance");

//id validator
const { idValidator } = require("../utils/validators/idValidator");

//services
const {
  reqBodySearch,
  reqBodySearchAct,
  reqBodyCreateInsurance,
  reqBodyCreateDisease,
  reqBodyCreateAllergie,
  reqBodyCreateDrug,
  reqBodyCreateAct,
  reqBodyEdit,
  reqBodyEditAct,
  reqBodySearchGetApi,
} = require("../services/reqBodyGlobal");

//get global for new patient Allergie Disease Insurance Drug Act

router
  .route(`/get/allergie`)
  .post(reqBodySearchGetApi, getAll(Allergie, "name"));
router.route(`/get/disease`).post(reqBodySearchGetApi, getAll(Disease, "name"));
router.route(`/get/drug`).post(reqBodySearchGetApi, getAll(Drug, "name"));
router
  .route(`/get/insurance`)
  .post(reqBodySearchGetApi, getAll(Insurance, "name"));
router
  .route(`/get/act`)
  .post(reqBodySearchGetApi, getAll(Act, "name,price,color,traitments"));

//Allergis Router :
//allergie getAll
router
  .route("/allergie/all")
  .post(reqBodySearch, getAll(Allergie, "name,isActive"));
//allergie createOne
router.route("/allergie/add").post(reqBodyCreateAllergie, createOne(Allergie));
//allergie edit
router
  .route("/allergie/edit/:id")
  .put(idValidator, reqBodyEdit, editOne(Allergie));

//Disease Router :
//Disease getAll
router
  .route("/disease/all")
  .post(reqBodySearch, getAll(Disease, "name,isActive"));
//Disease createOne
router.route("/disease/add").post(reqBodyCreateDisease, createOne(Disease));
//Disease edit
router
  .route("/disease/edit/:id")
  .put(idValidator, reqBodyEdit, editOne(Disease));

//Insurance Router :
//Insurance getAll
router
  .route("/insurance/all")
  .post(reqBodySearch, getAll(Insurance, "name,isActive"));
//Insurance createOne
router
  .route("/insurance/add")
  .post(reqBodyCreateInsurance, createOne(Insurance));
//Insurance edit
router
  .route("/insurance/edit/:id")
  .put(idValidator, reqBodyEdit, editOne(Insurance));

//Drug Router :
//Drug getAll
router.route("/drug/all").post(reqBodySearch, getAll(Drug, "name,isActive"));
//Drug createOne
router.route("/drug/add").post(reqBodyCreateDrug, createOne(Drug));
//Drug edit
router.route("/drug/edit/:id").put(idValidator, reqBodyEdit, editOne(Drug));

//Act Router :
//Act getAll
router
  .route("/act/all")
  .post(
    reqBodySearchAct,
    getAll(Act, "name,familyAct,price,code,cotations,color,traitments,isActive")
  );
//Act createOne
router.route("/act/add").post(reqBodyCreateAct, createOne(Act));
//Act edit
router.route("/act/edit/:id").put(idValidator, reqBodyEditAct, editOne(Act));

module.exports = router;
