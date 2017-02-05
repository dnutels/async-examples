'use strict';

const winston = require('winston');

const Logger = new winston.Logger({
    transports: [
        new winston.transports.Console({
            colorize: true
        })
    ],
    exitOnError: false
});

module.exports = Logger;
