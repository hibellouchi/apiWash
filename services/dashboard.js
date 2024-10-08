const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

//models
const EmployeeSalaire = require("../models/EmployeeSalaire");
const Employee = require("../models/Employee");
const Customer = require("../models/Customer");
const Charge = require("../models/Charge");
const Order = require("../models/Order");
const CategoryClothe = require("../models/CategoryClothe");

//dashboard Api
exports.dashboardApi = asyncHandler(async (req, res) => {
  const query = {
    isActive: true,
    userId: new mongoose.Types.ObjectId(req.user.userId),
  };
  const queryOrderPaid = {
    status: "Paid",
    isActive: true,
    userId: new mongoose.Types.ObjectId(req.user.userId),
  };
  const queryOrder = {
    status: { $in: ["Paid", "No Paid"] },
    isActive: true,
    userId: new mongoose.Types.ObjectId(req.user.userId),
  };
  const queryOrderNoPaid = {
    status: "No Paid",
    isActive: true,
    userId: new mongoose.Types.ObjectId(req.user.userId),
  };

  //Customer count
  const customerCounts = await Customer.countDocuments(query);
  //employee count
  const employeeCounts = await Employee.countDocuments(query);

  //Order count
  const orderCounts = await Order.countDocuments(query);
  //Order count
  const categoryClotheCounts = await CategoryClothe.countDocuments(query);

  //EmployeeSalaire sum
  const employeeSalairePrice =
    await EmployeeSalaire.find(query).select("price");
  const employeeSalaireSum = employeeSalairePrice.reduce(
    (acc, doc) => acc + doc.price,
    0
  );
  //Charge sum
  const chargePrice = await Charge.find(query).select("price");
  const chargeSum = chargePrice.reduce((acc, doc) => acc + doc.price, 0);
  //Order sum
  const ordertotal = await Order.find(queryOrder).select("total");
  const orderSum = ordertotal.reduce((acc, doc) => acc + doc.total, 0);
  //Order sum paid
  const orderPaidtotal = await Order.find(queryOrderPaid).select("total");
  const orderPaidSum = orderPaidtotal.reduce((acc, doc) => acc + doc.total, 0);

  //Order sum no paid
  const orderNoPaidtotal = await Order.find(queryOrderNoPaid).select("total");
  const orderNoPaidSum = orderNoPaidtotal.reduce(
    (acc, doc) => acc + doc.total,
    0
  );

  res.status(200).json({
    customerCounts: customerCounts,
    employeeCounts: employeeCounts,

    orderCounts: orderCounts,
    categoryClotheCounts: categoryClotheCounts,
    employeeSalaireSum: employeeSalaireSum,
    chargeSum: chargeSum,
    orderSum: orderSum,
    orderPaidSum: orderPaidSum,
    orderNoPaidSum: orderNoPaidSum,
  });
});
