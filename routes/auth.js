const express = require("express");
const {
  register,

} = require("../services/auth");


const router = express.Router();

router.post("/register-admin", register);
router.post("/login", login);

module.exports = router;
