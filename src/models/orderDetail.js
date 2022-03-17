const sqlConnection = require("../service/sqlConnection");

function listOrderDetails(data ,cb){
    var sql = `
            SELECT * 
            FROM 
                users U 
                INNER JOIN orderdetail OD on ( U.ID = OD.userID )
                INNER JOIN orderitem OI  on ( OD.ID = OI.OrderID )
                INNER JOIN markets M  on ( OI.MarketID = M.ID )
                INNER JOIN commodity C on ( C.ID  = OI.CmdtyID )
            WHERE 
                U.ID =?`;
    var values = [];
    values.push(data.UserID);
    sqlConnection.executeQuery(sql , values , function(err, result){
        cb(err, result);
    })

}


function findOrderByUser(data, cb){
    var sql =`SELECT 
                ID, TotalPrice AS Total
              FROM 
                orderdetail
              WHERE 
                UserId =? LIMIT 1 `;
    var values=[];
    values.push(data.userId);
    sqlConnection.executeQuery(sql, values, function(err, result){
        cb(err, result);
    })
}


function addOrder(data,cb){
    var sql =`INSERT INTO 
                orderdetail
                (TotalPrice, UserID, CreatedAt, UpdtateAt)
            VALUES 
                (? , ? , now() , now())`;
    var values=[];
    values.push(data.TotalPrice);
    values.push(data.UserID);
    sqlConnection.executeQuery(sql, values, function(err, result){
        cb(err, result);
    })

}


function getOrderDetailsByUserID(data, cb){
    var sql =`
    SELECT 
        OD.ID as OrderID , C.CmdtyName as ComdtyName,  OI.PriceUnit as Priceunit,
        M.MarketName as marketName , M.MarketType as MarketType , OI.ConvFactor 
        as convFactor, OD.TotalPrice AS price
    FROM 
        orderdetail OD 
        LEFT JOIN orderItem OI ON ( OD.ID = OI.OrderID ) 
        LEFT JOIN markets M ON ( OI.MarketID = M.ID )
        LEFT JOIN commodity C ON ( OI.CmdtyID = C.ID )
    WHERE  
        OD.UserID = ?; `;
    
    var values=[];
    values.push(data.UserID);
    sqlConnection.executeQuery(sql, values, function(err, result){
        cb(err, result);
    })

    
}



function getOrderDetails( cb){
    var sql =`
    SELECT 
        OD.ID as OrderID , OD.UserID, U.UserName, C.CmdtyName as ComdtyName, C.CmdtyStatus
        OI.PriceUnit as Priceunit, M.MarketName as marketName , M.MarketType 
        as MarketType , OI.ConvFactor as convFactor, OD.TotalPrice AS price
    FROM 
        orderdetail OD 
        LEFT JOIN orderItem OI ON ( OD.ID = OI.OrderID ) 
        LEFT JOIN markets M ON ( OI.MarketID = M.ID ) 
        LEFT JOIN commodity C ON ( OI.CmdtyID = C.ID ) 
        LEFT JOIN  users U ON ( U.ID = OD.UserID ); 
    `;
    
    var values=[];
    sqlConnection.executeQuery(sql, values, function(err, result){
        cb(err, result);
    })

    
}


module.exports = { listOrderDetails , findOrderByUser, addOrder , getOrderDetailsByUserID, getOrderDetails };