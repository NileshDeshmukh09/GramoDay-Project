const sqlConnection = require("../service/sqlConnection");

/* Database for adding reports */
function addReports(data ,cb){
    let sql = `
    INSERT INTO 
        report(UserID , marketID, marketName, CmdtyID , marketType ,
        cmdtyName , priceUnit, reportID, convFactor, price, createdAt , updatedAt)
    VALUES 
        (?, ? , ?,  ? , ?, ? , ? , ? ,?, ?, now() , now());
    `;
    let values = [];

    values.push(data.UserID);
    values.push(data.marketID);
    values.push(data.marketName);
    values.push(data.CmdtyID);
    values.push(data.marketType);
    values.push(data.cmdtyName);
    values.push(data.priceUnit);
    values.push(data.reportID);
    values.push(data.convFactor);
    values.push(data.price);

    sqlConnection.executeQuery(sql, values , function(err ,result){
        cb(err ,result);
    })
}

/* Query for getting reports from the Database */
function getReportDetails(data , cb){
   let sql = `
    SELECT 
        reportID as ID, cmdtyName, CmdtyID, marketID, marketName, marketType,  group_Concat(priceUnit separator ',') as priceUnit,
        group_Concat( UserID separator',') as Users , round(AVG(price DIV convFactor )) as Avgprice, createdAt 
    FROM
        report 
    WHERE
        reportID = ?
    GROUP BY
         reportID , cmdtyName ;
    `;
    let values = []
    values.push(data.reportID);
    sqlConnection.executeQuery(sql , values , function(err ,result){
        cb(err, result);
    })
}


/* exporting all the Models */
module.exports = { addReports , getReportDetails }