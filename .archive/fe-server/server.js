'use strict';

const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

const PORT = 4001;
const Logger = console;

app.post('/api/customers', (req, res) => {
    const customerID = Math.random(0, 1);

    if (customerID < 0.99) {
        res.status(201).send({customerID});
    } else {
        res.status(422).send({customerID});
    }
});

app.post('/api/customers/:customerID/orders', (req, res) => {
    const orderID = Math.random(0, 1);

    res.status(200).send({orderID});
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
