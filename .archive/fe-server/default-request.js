'use strict';

const request = require('request');

module.exports = request.defaults({baseUrl: 'http://localhost:4001/api', json: true});
