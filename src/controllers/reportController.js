const Report = require("../models/report");

/* controller for Adding Reports */
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
            responseData.success = "Success";
            responseData.msg = "Successfully added Report!";
            responseData.reportID = data.reportID;
                
            
            return res.status(200).send(responseData);
        })
    }
    else {
        return res.status(400).send(responseData);
    }
}

/* Controller for get  Reports */
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
            responseData.success = "success";
            responseData.msg = "Successfully Fetch Report!";
            responseData.reportDetail = result;
        
            return res.status(200).send(responseData);
        })

    }
    else {
        /* Bad Request */
        return res.status(400).send(responseData);
    }

}



module.exports = { addReport , getReport }