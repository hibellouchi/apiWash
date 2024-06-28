const express = require("express");
const asyncHandler = require("express-async-handler");

const router = express.Router();

const { createAct } = require("../services/act");

//validation
const { createActValidator } = require("../utils/validators/act");
//global services
const { getAll, createOne, editOne } = require("../services/global");

//models

const Act = require("../models/Act");

//id validator
const { idValidator } = require("../utils/validators/idValidator");

//services

//get global for new patient Allergie Disease Insurance Drug Act

router.route(`/get/act`).post(getAll(Act, "name,price,color,traitments"));

//Act Router :
//Act getAll
router
  .route("/act/all")
  .post(
    getAll(Act, "name,familyAct,price,code,cotations,color,traitments,isActive")
  );
//Act createOne
router.route("/act/add").post(createOne(Act));
//Act edit
router.route("/act/edit/:id").put(idValidator, editOne(Act));

module.exports = router;
