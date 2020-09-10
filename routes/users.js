const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/users");

router.get("/", createUser);

module.exports = router;