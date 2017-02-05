'use strict';

const rq = require('request');
const rqp = require('request-promise');

const CONFIG = {
    baseUrl: 'http://localhost:4000/api',
    json: true,
    headers: {
        'User-Agent': ''
    }
};

const request = rq.defaults(CONFIG);
const requestPromise = rqp.defaults(CONFIG);

module.exports = {
    request,
    requestPromise
};
