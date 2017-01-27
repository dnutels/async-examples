'use strict';

const request = require('./default-request');

function createReporter(res) {
    return function report(state) {
        const {status, payload} = state;
        res.status(status).send(payload);
    };
}

function updateReporter(report, addition) {
    return function updatedReporter(state) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.payload = Object.assign({}, newState.payload, addition);

        report(newState);
    };
}

function handleOrderCreation(error, data, report) {
    if (!error) {
        const {orderID} = data.body;
        report({status: 201, payload: {orderID}});
    } else {
        report({status: 422, payload: error});
    }
}

function createOrder(customerID, report) {
    request.post({
        url: `customers/${customerID}/orders`
    }, (error, data) => {
        const newReport = updateReporter(report, {customerID});
        handleOrderCreation(error, data, newReport);
    });
}

function handleCustomerCreation(error, data, report) {
    if (!error) {
        const {customerID} = data.body;
        createOrder(customerID, report);
    } else {
        report({status: 422, payload: error});
    }
}

function createCustomer(report) {
    request.post({url: 'customers'}, (error, data) => {
        handleCustomerCreation(error, data, report);
    });
}

module.exports = function callbackHellCircle5(res) {
    const report = createReporter(res);
    createCustomer(report);
};
