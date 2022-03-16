var express = require('express');
var router = express.Router();

var userController = require("../src/controllers/userController");
var marketController = require("../src/controllers/marketController");
var cmdtyController = require("../src/controllers/cmdtyController");

router.post("/user/signup" , userController.signup);
router.post("/get/users" , userController.getUserByID);
router.post("/market/add" , marketController.addMarket);
router.post("/commodity/add" , cmdtyController.addCmdty);

module.exports = router;