'use strict';

const winston = require('winston');
const toYAML = require('winston-console-formatter');

const Logger = new winston.Logger({
    transports: [
        new winston.transports.Console(toYAML.config())
    ],
    exitOnError: false
});

module.exports = Logger;
