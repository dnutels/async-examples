'use strict';

const rq = require('request');
const rqp = require('request-promise');
const winston = require('winston');
const toYAML = require('winston-console-formatter');

const log = new winston.Logger({
    transports: [
        new winston.transports.Console(toYAML.config())
    ],
    exitOnError: false
});

const CONFIG = {
    baseUrl: 'https://api.github.com/',
    json: true,
    headers: {
        'User-Agent': ''
    }
};

const request = rq.defaults(CONFIG);
const requestPromise = rqp.defaults(CONFIG);

const users = ['isaacs', 'jdalton', 'gaearon'];

module.exports = {
    request,
    requestPromise,
    users,
    log
};
