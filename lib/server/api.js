'use strict';

const Logger = require('./logger');

const express = require('express');

function test(req, res) {
    Logger.info(req.query);
    res.status(200).send('OK');
}

const router = express.Router();

router.get('/test', test);

module.exports = router;
