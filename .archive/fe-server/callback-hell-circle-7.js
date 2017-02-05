'use strict';

const request = require('./default-request');

module.exports = function callbackHellCircle7(res) {
    request.post({
        url: 'customers'
    }, (customerError, customerData) => {
        if (!customerError) {
            const {body: customer} = customerData;
            const {customerID} = customer;

            request.post({
                url: `customers/${customerID}/orders`
            }, (orderError, orderData) => {
                const {body: order} = orderData;
                const {orderID} = order;

                if (!orderError) {
                    res.status(201).send({customerID, orderID});
                } else {
                    res.status(422).send(orderError);
                }
            });
        } else {
            res.status(422).send(customerError);
        }
    });
};
