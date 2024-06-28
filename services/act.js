/* eslint-disable prefer-const */
const asyncHandler = require("express-async-handler");
const ApiError = require("../utils/apiError");
//models
const Act = require("../models/Act");

//get act by id
exports.getActById = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const act = await Act.findById(id);
  if (!act) {
    return next(new ApiError("data not found !!!", 400));
  }
  res.status(200).json({
    message: "act find successfuly!",
    name: act.name,
    familyAct: act.familyAct,
    price: act.price,
    code: act.code,
    Cotations: act.Cotations,
    note: act.note,
    color: act.color,
    traitments: act.traitments,
  });
});

//post: create new act
exports.createAct = asyncHandler(async (req, res, next) => {
  const act = await Act.create(req.body);
  res.status(200).json({
    message: "Added successfuly!",
    name: act.name,
    familyAct: act.familyAct,
    price: act.price,
    code: act.code,
    Cotations: act.Cotations,
    note: act.note,
    color: act.color,
    traitments: act.traitments,
  });
});

//put: edit act
exports.editAct = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const act = await Act.findByIdAndUpdate(
    id,
    {
      name: req.body.name,
      familyAct: req.body.familyAct,
      price: req.body.price,
      code: req.body.code,
      Cotations: req.body.Cotations,
      note: req.body.note,
      color: req.body.color,
      $push: {
        traitments: req.body.traitments,
      },
    },
    { new: true }
  );
  if (!act) {
    return next(new ApiError("act not found !!!", 400));
  }
  res.status(200).json({
    message: "Updated Successfully!",
    name: act.name,
    familyAct: act.familyAct,
    price: act.price,
    code: act.code,
    Cotations: act.Cotations,
    note: act.note,
    color: act.color,
    traitments: act.traitments,
  });
});
