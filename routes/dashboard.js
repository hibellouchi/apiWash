const express = require("express");

const router = express.Router();

//reqHandel
const { dashboardApi } = require("../services/dashboard");

// sum price all charge
router.route(`/all`).post(dashboardApi);

module.exports = router;
