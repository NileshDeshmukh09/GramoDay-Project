const sqlConnection = require("../service/sqlConnection");


function addOrderItem(data , cb){
    var sql =`INSERT INTO OrderItem
              (OrderID , MarketID , CmdtyID , priceUnit , ConvFactor ,  CreatedAt , UpdatedAt)
              VALUES (? , ?, ? , ?, now(), now())`;

    var values=[];
    values.push(data.OrderID);
    values.push(data.MarketID);
    values.push(data.CmdtyID);
    values.push(data.priceUnit);
    values.push(data.ConvFactor);
    sqlConnection.executeQuery(sql, values, function(err, result){
    cb(err, result);
    })
}

function editOrderItem(data, cb){
    var sql = `UPDATE OrderItem SET 
               ConvFactor = ? , UpdatedAt = now()
               WHERE OrderId = ? AND CmdtyID = ? `;
    var values=[];
    values.push(data.ConvFactor);
    values.push(data.OrderID);
    values.push(data.CmdtyID);
    sqlConnection.executeQuery(sql, values, function(err, result){
    cb(err, result);
    });
}

function deleteOrderItem(data,cb){
    var sql = `DELETE FROM OrderItem
               WHERE OrderId = ? AND CmdtyID = ? AND MarketID = ? `;
    var values=[];
    values.push(data.OrderID);
    values.push(data.CmdtyID);
    values.push(data.MarketID);
    sqlConnection.executeQuery(sql, values, function(err, result){
        cb(err, result);
    })
}

function getOrderItem(data, cb){
    var sql = `SELECT * FROM  OrderItems
    WHERE OrderID = ? AND CmdtyID = ? AND MarketID = ? `;
    var values=[];
    values.push(data.OrderID);
    values.push(data.CmdtyID);
    values.push(data.MarketID);
    sqlConnection.executeQuery(sql, values, function(err, result){
        cb(err, result);
    });
}

module.exports = {addOrderItem , editOrderItem,  deleteOrderItem, getOrderItem};