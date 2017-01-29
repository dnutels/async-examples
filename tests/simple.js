'use strict';

const Logger = require('../lib/common/logger');

const {request, requestPromise} = require('./common');

function getUsers() {
    request.get({url: '/users/'}, (err, response) => {
        if (!err) {
            const {body: users} = response;
            Logger.info(users);
        } else {
            Logger.error(err);
        }
    });
}

function getUsersPromise() {
    return requestPromise.get({url: '/users/'}).then((users) => {
        Logger.info(users);
    }).catch((err) => {
        Logger.error(err);
    });
}

async function getUsersAsync() {
    try {
        const users = await requestPromise.get({url: '/users/'});
        Logger.info(users);
    } catch(err) {
        Logger.error(err);
    }
}

function requestWrapper(config) {
    const it = (function *() {
        const result = yield request.get(config, (err, response) => {
            if (!err) {
                const {body: users} = response;
                it.next(users);
            } else {
                it.next(err);
            }
        });
        Logger.info(result);
    }());

    return it;
}

function getUsersGenerator() {
    const it = requestWrapper({url: '/users/'});
    it.next();
}

getUsers();
getUsersPromise();
getUsersAsync();
getUsersGenerator();
