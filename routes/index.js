var express = require('express');
var router = express.Router();

var reportController = require("../src/controllers/reportController");

router.post("/report", reportController.addReport );
router.get("/report", reportController.getReport );

module.exports = router;