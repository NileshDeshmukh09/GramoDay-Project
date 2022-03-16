var Cmdty = require("../models/commodity");

function addCmdty(req, res){
    let data = req.body;
    let responseData = {
        success : true,
        msg : "Invalid Details for Commodity"
    }

    if(data.CmdtyName){
        Cmdty.addCmdty(data , function(err , result){
            if(err){
                console.log(err);
                responseData.msg = "Error in add Details";
                return res.status(500).send(responseData);
            }
            responseData.success = true;
            responseData.msg = "Successfully added Vegetables!";
            responseData.data = {
                Commodity : data.CmdtyName,
            };
            return res.status(200).send(responseData);
        })
    }
}

module.exports = { addCmdty };