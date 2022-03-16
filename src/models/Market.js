var sqlConnection = require("../service/sqlConnection");

function  addMarketDetails( data , cb){
    let sql = `INSERT INTO markets
            (MarketName , MarketType)
            VALUES (?, ?)
            `;
    let values = [];
    values.push(data.MarketName);
    values.push(data.MarketType);
    sqlConnection.executeQuery(sql , values , function(err , result){
        cb(err, result);
    });
}

function getMarketDetails(data, cb) {
    let sql = `SELECT * FROM markets WHERE MarketName = ?`;
    let values = [];
    values.push(data.MarketName);
    sqlConnection.executeQuery(sql, values, function(err, result) {
        cb(err, result);
    });
}


module.exports = { addMarketDetails , getMarketDetails }