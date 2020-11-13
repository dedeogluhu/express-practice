const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config');
const utils = require('./utils');

const listRouter = require('./routers/api/list');
const addRouter = require('./routers/api/add');

const app = express();

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routers
app.use('/api', listRouter);
app.use('/api/add', addRouter);

utils.connectMongoDB();

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});