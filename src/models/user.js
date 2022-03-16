const sqlConnection = require("../service/sqlConnection");

function signup(data , cb){
    let sql = `INSERT INTO users
               (UserName , Password , UserType, createdAt , updatedAt)
                values( ? , ?, 1 , now() , now())`;
    let values = [];
    values.push(data.UserName);
    values.push(data.Password);
    sqlConnection.executeQuery(sql , values, function(err , result){
        cb(err, result);
    });
}

function getUsersSignupDetails(data, cb) {
    let sql = "SELECT * FROM users WHERE UserName = ?";
    let values = [];
    values.push(data.UserName);
    sqlConnection.executeQuery(sql, values, function(err, result) {
        cb(err, result);
    });
}

function getUserByID(cb) {
    let sql = "SELECT * FROM users";
    let values = [];
    sqlConnection.executeQuery(sql, values, function(err, result) {
        cb(err, result);
    });
}

module.exports = { signup , getUsersSignupDetails, getUserByID};