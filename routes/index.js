var express = require('express');
var router = express.Router();

var userController = require("../src/controllers/userController");
var marketController = require("../src/controllers/marketController");
var cmdtyController = require("../src/controllers/cmdtyController");
var orderController = require("../src/controllers/orderController");

router.post("/user/signup" , userController.signup);
router.post("/users" , userController.getUserByID);

router.post("/market/add" , marketController.addMarket);
router.post("/commodity/add" , cmdtyController.addCmdty);

router.post("/order/details",orderController.getOrderDetails );
router.post("/order/report/",orderController.getOrderDetailsByUserID );

module.exports = router;