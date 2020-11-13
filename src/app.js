const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config');
const utils = require('./utils');

const postsRouter = require('./routers/api/posts');
const addRouter = require('./routers/api/add');

const app = express();

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routers
app.use('/api/posts', postsRouter);
app.use('/api/add', addRouter);

utils.connectMongoDB();

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});