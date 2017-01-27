'use strict';

const Logger = require('./logger');

const {request, requestPromise} = require('./common');

function test1() {
    request.get({
        url: '/test?q=1'
    }, (err, info) => {
        if (!err) {
            const {body} = info;
            Logger.info(body);
        } else {
            Logger.error(err);
        }
    });
}

function test2() {
    return requestPromise.get({
        url: '/test?q=2'
    }).then((info) => {
        Logger.info(info);
    }).catch((err) => {
        Logger.error(err);
    });
}

test1();
test2();
