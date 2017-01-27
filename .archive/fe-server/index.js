'use strict';

const PATH = require('path');

const express = require('express');
const morgan = require('morgan');

const callbackHellCircle7 = require('./callback-hell-circle-7');
const callbackHellCircle6 = require('./callback-hell-circle-6');
const callbackHellCircle5 = require('./callback-hell-circle-5');
const callbackHellCircle4 = require('./callback-hell-circle-4');

const Logger = console;
const app = express();

app.use(morgan('dev'));

const PORT = 3001;
const PUBLIC_FOLDER = PATH.resolve(__dirname, 'public/');

app.use('/', express.static(PUBLIC_FOLDER));

app.get('/api/create-customer-order', (req, res) => {
    const {num} = req.query;

    switch (num) {
    case '1':
        callbackHellCircle7(res);
        break;
    case '2':
        callbackHellCircle6(res);
        break;
    case '3':
        callbackHellCircle5(res);
        break;
    case '4':
        callbackHellCircle4(res);
        break;
    default:
        break;
    }
});

if (!module.parent) {
    app.listen(PORT, (err) => {
        if (!err) {
            Logger.log(`Listening on ${PORT}`);
        } else {
            Logger.log(err);
        }
    });
}

module.exports = app;
