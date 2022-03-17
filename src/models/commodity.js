var sqlConnection = require("../service/sqlConnection");

function addCmdty(data ,cb){
    let sql = `INSERT INTO commodity
               (CmdtyName , CmdtyStatus, createdAt , updatedAt)
               VALUES( ? , ?,  now() , now())
               `;
    let values = [];
    values.push(data.CmdtyName);
    values.push(data.CmdtyStatus);
    sqlConnection.executeQuery(sql, values, function(err, result){
        cb(err, result);
    });
}

module.exports = { addCmdty }