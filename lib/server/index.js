'use strict';

const express = require('express');
const morgan = require('morgan');

const Logger = require('../common/logger');
const apiRouter = require('./api');

const app = express();

const stream = {
    write(message) {
        Logger.info(message);
    }
};

app.use(morgan('dev', {stream}));

app.use('/api', apiRouter);

app.listen(4000, () => {
    Logger.info(`Listening on ${4000}`);
});
