'use strict';

const {request, requestPromise, users, log} = require('./common');

function searchUserFollowers(user) {
    request.get({
        url: 'search/users',
        qs: {q: user}
    }, (err, info) => {
        if (!err) {
            const {items} = info.body;

            items.forEach((item) => {
                const {login} = item;

                request.get({
                    url: `users/${login}/followers`
                }, (err, {body}) => {
                    if (!err) {
                        log.info(body);
                    } else {
                        log.error(err);
                    }
                })
            })
        } else {
            log.error(err);
        }
    });
}

searchUserFollowers('12k;lkdsd012');
