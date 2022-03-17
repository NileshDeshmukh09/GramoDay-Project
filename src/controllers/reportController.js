const Report = require("../models/report");


function addReport(req, res) {
    let data = req.body;
    let responseData = {
        success: false,
        msg: "Invalid Details for Adding OrderReport"
    }
    if (data.UserID && data.marketID && data.marketName && data.CmdtyID && data.marketType
        && data.cmdtyName && data.priceUnit && data.reportID && data.convFactor && data.price) {

        Report.addReports(data, function (err1, result1) {
            if (err1) {
                console.log(err1);
                responseData.msg = "Error in creating Report!"
                return res.status(500).send(responseData);
            }
            responseData.success = true;
            responseData.msg = "Successfully added Report!";
            responseData.data = {
                reportID: data.reportID,
                
            };
            return res.status(200).send(responseData);
        })



    }
    else {
        return res.status(400).send(responseData);
    }
}

function getReport(req, res) {
    let data = req.query;
    let responseData = {
        success: false,
        msg: "please refine your query !"
    }
    if (data.reportID) {
        Report.getReportDetails(req.query , function(err , result){
            if (err) {
                console.log(err);
                responseData.msg = "Error in Report!"
                return res.status(500).send(responseData);
            }
            responseData.success = true;
            responseData.msg = "Successfully Fetch Report!";
            responseData.data = {
                reportDetail: result,
            };
            return res.status(200).send(responseData);
        })

    }
    else {
        return res.status(400).send(responseData);
    }

}



module.exports = { addReport , getReport }