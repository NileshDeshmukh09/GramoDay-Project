var express = require('express');
var app = express();
var mysql = require('mysql');
// var db = require("./src/constants/backendConfig");
// var connection = mysql.createConnection(db.mysql.local);
var apiRouter = require('./routes/index');
const port = 4000;


app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: false }));

app.use('/api', apiRouter);


// connection.connect(function(err) {
//     if (err) throw err
//     console.log('You are now connected...')
//   })

app.listen(4000 , (req, res) => {
	console.log(`Server Running on http://localhost:4000`);
});

module.exports = app;

