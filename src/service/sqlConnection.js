const mysql = require("mysql");
const Config = require("../constants/backendConfig");
var pool = mysql.createPool(Config.mysql.local);

module.exports = {
	executeQuery: function (sql, data, callback) {
		pool.getConnection(function (err, connection) {
			if (err) {
				console.log("server  not Connected");
				callback(err);
			} else {
				connection.query(sql, data, function (err1, results) {
					console.log("Wow ! , Connected Succesfully", results);
					console.log("Err : ", err1);

					connection.release();
					callback(err1, results);
				});
			}
		});
	}
};

