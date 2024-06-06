const express = require("express");
const { createSetting } = require("../services/settings");
const router = express.Router();
router.post("/", createSetting);
module.exports = router;
