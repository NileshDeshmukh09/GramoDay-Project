const  express = require('express');
const app = express();
const apiRouter = require('./routes/index');
const port = 4000;


app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: false }));

// routes for the api
app.use('/api', apiRouter);

app.listen(port , (req, res) => {
	console.log(`Server Running on http://localhost:${port}`);
});

module.exports = app;

