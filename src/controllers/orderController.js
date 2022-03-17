const OrderDetails = require("../models/OrderDetail");
const OrderItem = require("../models/orderitem");


function getOrderDetails(req, res){
    // let data = req.body;
    // if(data.UserID){
        OrderDetails.getOrderDetails( function(err, result){
            if(err){
                console.log(err);
                return res.status(500).send({message: "Not Ok!"});
            }
            return res.status(200).send({
                success: true,
                msg: "Successfully fetched order Details",
                orderDetails : result
            })
        })
    // }
}

function getOrderDetailsByUserID(req, res){
    let data = req.body;
    if(data.UserID){
        OrderDetails.getOrderDetailsByUserID(data , function(err, result){
            if(err){
                console.log(err);
                return res.status(500).send({message: "Not Ok!"});
            }
            return res.status(200).send({
                reportDetail : ({
                    success: true,
                    msg: `Successfully fetched order Details by  UserID : ${data.UserID}`,
                    reportID : result[0].Priceunit,
                    orderDetails : result

                })
            })
        })
    }
}

module.exports = { getOrderDetails , getOrderDetailsByUserID }