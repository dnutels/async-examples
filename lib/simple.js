'use strict';

const rq = require('request');
const argv = require('yargs').argv;
const winston = require('winston');

const Log = new winston.Logger({
    transports: [
       new (winston.transports.Console)({
           colorize: true
       })
   ]
});

const request = rq.defaults({
    baseUrl: 'http://localhost:4001/api',
    json: true
});

function callback() {
    request.post({url: 'customers'}, (customerErr, customer) => {
        if (!customerErr) {
            const {customerID} = customer.body;

            request.post({url: `customers/${customerID}/orders`}, (orderErr, order) => {
                const {orderID} = order.body;

                if (!orderErr) {
                    Log.info({customerID, orderID});
                } else {
                    Log.error(orderErr);
                }
            });
        } else {
            Log.error(customerErr);
        }
    });
}

const functions = [
    callback
];

/* --------------------------------------------------------------------------------------------- */

(function execute() {
    let funcs = functions.map((func) => {
        return () => {
            Log.info(' --------------------------------------------------------------------------');
            func();
        };
    });

    JSON.parse(argv.num).forEach((num) => {
        funcs[num - 1]();
    });
}());
