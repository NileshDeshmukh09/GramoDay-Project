var Market = require("../models/Market");

function addMarket(req, res){
    let data  = req.body;
    let responseData ={
        success : false,
        msg : "Invalid Details for Adding Market"
    }
    if(data.MarketName && data.MarketType){
        Market.getMarketDetails(data , function(err, result){
            if(err){
                console.log(err);
                responseData.msg = "Error in Add Market";
                return res.status(500).send(responseData);
            }
            if(result.length > 0) {
                responseData.msg = "Market already exists";
                return res.status(500).send(responseData);
            }
            else {
                Market.addMarketDetails(data, function(err1, result1) {
                    if(err1) {
                        return res.status(500).send(responseData);
                    }
                    responseData.success = true;
                    responseData.msg = "Successfully added Market!";
                    responseData.data = {
                        Market: data.MarketName,
                    };
                    return res.status(200).send(responseData);
                })
            }
        })
    }
    else {
        return res.status(400).send(responseData);
    }
}



module.exports = { addMarket }