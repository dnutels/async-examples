'use strict';

const request = require('./promise-request');

function spread (callback) {
  return array => {
    return callback.apply(null, array)
  }
}

module.exports = function callbackHellCircle6(res) {
    request.post({url: 'customers'}).then((data) => {
        const {customerID} = data;
        return request.post({
            url: `customers/${customerID}/orders`
        }).then(({orderID}) => [customerID, orderID]);
    }).then(spread((customerID, orderID) => {
        res.status(201).send({customerID, orderID});
    })).catch((error) => {
        res.status(422).send(error);
    });
};
