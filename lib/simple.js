'use strict';

const {request, requestPromise, users, log} = require('./common');

function retrieveUser(user) {
    request.get({
        url: `users/${user}`
    }, (err, info) => {
        if (!err) {
            const {body} = info;
            log.info(body);
        } else {
            log.error(err);
        }
    });
}

function retrieveUserPromise(user) {
    return requestPromise.get({
        url: `users/${user}`
    }).then((info) => {
        log.info(info);
    }).catch((err) => {
        log.error(err);
    });
}

function retrieveUserPromiseAlt(user) {
    return requestPromise.get({
        url: `users/${user}`
    }).then((info) => {
        log.info(info);
    }, (err) => {
        log.error(err);
    });
}

async function retrieveUserAsync(user) {
    try {
        const info = await requestPromise.get({
            url: `users/${user}`
        });
        log.info(info);
    } catch (err) {
        log.error(err);
    }
}

try {
} catch(err) {
    log.error(err);
}


retrieveUser(users[0]);
retrieveUserPromise(users[0]);
retrieveUserPromiseAlt(users[0]);
retrieveUserAsync(users[0]);
