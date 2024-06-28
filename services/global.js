const asyncHandler = require("express-async-handler");
const ApiFeatures = require("../utils/apiFeatures");

const ApiError = require("../utils/apiError");

//global get all document
const getAll = (Model, Fields) =>
  asyncHandler(async (req, res) => {
    if (!req.query) {
      req.query = { isActive: true };
    }
    // Build query
    const documentsCounts = await Model.countDocuments(req.query);

    const apiFeatures = new ApiFeatures(Model.find(req.query), req.body)
      .paginate()
      //.search()
      .limitFields(Fields)
      .sort();

    // Execute query
    const { mongooseQuery } = apiFeatures;
    const documents = await mongooseQuery;

    res.status(200).json({ count: documentsCounts, data: documents });
  });

//global delete one document
const deleteOne = (Model) =>
  asyncHandler(async (req, res, next) => {
    // eslint-disable-next-line no-shadow
    const documents = await Model.findByIdAndUpdate(req.params.id, {
      isActive: false,
    });
    if (!documents) {
      return next(
        new ApiError(`No document for this id ${req.params.id}`, 404)
      );
    }
    res.status(204).send();
  });

//global edit one document
const editOne = (Model) =>
  asyncHandler(async (req, res, next) => {
    // eslint-disable-next-line no-shadow
    const documents = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!documents) {
      return next(
        new ApiError(`No document for this id ${req.params.id}`, 404)
      );
    }
    res.status(204).send();
  });

//global create one document
const createOne = (Model) =>
  asyncHandler(async (req, res) => {
    const newDoc = await Model.create(req.body);
    res.status(201).json({ data: newDoc });
  });

//global get one document
const getOne = (Model, fields) =>
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const newFields = fields.split(",").join(" ");
    const documents = await Model.findById(id).select(newFields);
    // if (documents.isActive === false) {
    //   return next(new ApiError(`No document for this id ${id}`, 404));
    // }
    if (!documents) {
      return next(new ApiError(`No document for this id ${id}`, 404));
    }
    res.status(200).json({ data: documents });
  });

module.exports = { getAll, deleteOne, createOne, getOne, editOne };
