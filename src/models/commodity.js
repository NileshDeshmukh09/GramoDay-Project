var sqlConnection = require("../service/sqlConnection");

function addCmdty(data ,cb){
    let sql = `INSERT INTO commodity
               (CmdtyName , createdAt , updatedAt)
               VALUES( ? , now() , now())
               `;
    let values = [];
    values.push(data.CmdtyName);
    sqlConnection.executeQuery(sql, values, function(err, result){
        cb(err, result);
    });
}

module.exports = { addCmdty }