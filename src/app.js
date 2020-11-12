const express = require('express');
const { PORT } = require('./config');
const { connectMongoDB } = require('./utils');

const app = express();

const listRouter = require('./routers/api/list');
const addRouter = require('./routers/api/add');

app.use('/', listRouter);
app.use('/add', addRouter);

connectMongoDB();

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});