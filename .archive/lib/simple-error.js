'use strict';

const {request, requestPromise, users, log} = require('./common');

function retrieveUserError(user) {
    request.get({
        url: `users/${user}`
    }, (err, info) => {
        let error = err;

        if (!error) {
            const {followers} = info.body;

            if (followers > 3000) {
                error = new Error('Too many followers!');
            } else {
                log.info(body);
            }
        }

        // throw error;
    });
}

function retrieveUserCallback(user, cb) {
    request.get({
        url: `users/${user}`
    }, (err, info) => {
        let error = err;

        if (!error) {
            const {followers} = info.body;

            if (followers > 3000) {
                error = new Error('Too many followers!');
            } else {
                cb(null, body);
            }
        }

        cb(error);
    });
}

function retrieveUsersCallback(users, cb) {
    users.forEach((user) => {
        request.get({
            url: `users/${user}`
        }, (err, info) => {
            let error = err;

            if (!error) {
                const {followers} = info.body;

                if (followers > 3000000) {
                    error = new Error('Too many followers!');
                } else {
                    cb(null, followers);
                }
            }

            cb(error);
        });
    });
}

function retrieveUsersPromise(users) {
    const promises = users.map((user) => {
        return requestPromise.get({url: `users/${user}`});
    });

    return Promise.all(promises).then((infos) => {
        const result = [];

        infos.forEach((info) => {
            const {followers} = info;

            if (followers > 300000) {
                throw new Error('Too many followers!');
            } else {
                result.push(followers);
            }
        });

        return result;
    });
}

async function retrieveUsersAsync(users) {
    const promises = users.map((user) => {
        return requestPromise.get({url: `users/${user}`});
    });

    let results = [];

    try {
        for (let promise of promises) {
            results.push(await promise);
        }
    } catch(err) {
        throw new Error(err);
    }

    return results;
    // const result = [];
    //
    // infos.forEach((info) => {
    //     const {followers} = info;
    //
    //     if (followers > 300000) {
    //         throw new Error('Too many followers!');
    //     } else {
    //         result.push(followers);
    //     }
    // });
}

// retrieveUserError(users[0]);
//
// retrieveUserCallback(users[0], (err, info) => {
//     if (!err) {
//         log.info(info);
//     } else {
//         log.error(err);
//     }
// });
//
// retrieveUsersCallback(users, (err, info) => {
//     if (!err) {
//         log.info(info);
//     } else {
//         log.error(err);
//     }
// });
//
// retrieveUsersPromise(users).then((info) => {
//     log.info(info);
// }).catch((err) => {
//     log.error(err);
// });

const result = retrieveUsersAsync(users).catch((err) => {
    console.log(err);
});

console.log(result);
