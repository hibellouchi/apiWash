const express = require("express");
const { register, login } = require("../services/auth");

const router = express.Router();

router.post("/register-admin", register);
router.post("/login", login);

module.exports = router;
