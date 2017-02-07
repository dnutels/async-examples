'use strict';

const Logger = require('../lib/common/logger');

const rq = require('request');
const rqp = require('request-promise');

const CONFIG = {
    baseUrl: 'https://api.github.com',
    json: true,
    headers: {
        'User-Agent': '',
        // 'Authorization': 'token'
    }
};

const request = rq.defaults(CONFIG);
const requestPromise = rqp.defaults(CONFIG);

// function send(email, text, cb) {
//     cb(null, 'OK');
// }
//
// function success(ack) {
//     Logger.info(ack);
// }
//
// function userError(err) {
//     Logger.error('USER', err);
// }
//
// function followerError(err) {
//     Logger.error('FOLLOWER', err);
// }
//
// function mailError(err) {
//     throw new Error('Lazy bum!');
// }
//
// function contactFollowers(name, emailText, callbacks) {
//     request.get({url: `users/${name}/followers`}, (err, result) => {
//         if (!err) {
//             const {body: followers} = result;
//             const someFollowers = followers.slice(0, 3);
//
//             someFollowers.forEach((follower) => {
//                 getFollowerInfo(follower, emailText, callbacks);
//             });
//         } else {
//             callbacks.followerError(err);
//         }
//     });
// }
//
// function getFollowerInfo(follower, emailText, callbacks) {
//     const {login} = follower;
//
//     request.get({url: `users/${login}`}, (err, result) => {
//         if (!err) {
//             const {body: user} = result;
//             const {email, hireable} = user;
//
//             if (hireable) {
//                 sendEmail(email, emailText, callbacks);
//             }
//         } else {
//             callbacks.userError(err);
//         }
//     });
// }
//
// function sendEmail(email, emailText, callbacks) {
//     send(email, emailText, (err, ack) => {
//         if (!err) {
//             callbacks.success(ack);
//             callbacks.mailError(err);
//         } else {
//         }
//     });
// }
//
// contactFollowers('gaearon', '...', {
//     success,
//     userError,
//     followerError,
//     mailError
// });

// contactFollowers('gaearon', '...', (type, err, ack) => {
//     if (!err) {
//         Logger.info(ack);
//     } else {
//         Logger.error(type, err);
//     }
// });
//
// function contactFollowers(name, emailText, cb) {
//     request.get({url: `users/${name}/followers`}, (err, result) => {
//         if (!err) {
//             const {body: followers} = result;
//             const someFollowers = followers.slice(0, 3);
//
//             someFollowers.forEach((follower) => {
//                 getFollowerInfo(follower, emailText, cb)
//             });
//         } else {
//             cb('FOLLOWER', err);
//         }
//     });
// }
//
// function sendEmail(email, emailText, cb) {
//     send(email, emailText, (err, ack) => {
//         if (!err) {
//             Logger.info(ack);
//         } else {
//             cb('MAIL', err);
//         }
//     });
// }
//
// function getFollowerInfo(follower, emailText, cb) {
//     const {login} = follower;
//
//     request.get({url: `users/${login}`}, (err, result) => {
//         if (!err) {
//             const {body: user} = result;
//             const {email, hireable} = user;
//
//             if (hireable) {
//                 sendEmail(email, emailText, cb);
//             }
//         } else {
//             cb('USER', err);
//         }
//     });
// }

// function contactFollowers1(name, emailText) {
//     request.get({url: `users/${name}/followers`}, (err, result) => {
//         if (!err) {
//             const {body: followers} = result;
//             const someFollowers = followers.slice(0, 3);
//
//             someFollowers.forEach((follower) => {
//                 const {login} = follower;
//
//                 request.get({url: `users/${login}`}, (err, result) => {
//                     if (!err) {
//                         const {body: user} = result;
//                         const {email, hireable} = user;
//
//                         if (hireable) {
//                             send(email, emailText, (err, ack) => {
//                                 if (!err) {
//                                     Logger.info(ack);
//                                 } else {
//                                     Logger.error(err);
//                                 }
//                             });
//                         }
//                     } else {
//                         Logger.error(err);
//                     }
//                 });
//             });
//         } else {
//             Logger.error(err);
//         }
//     });
// }

// Logger.info('a');
//
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('b');
//     }, 100);
// }).then((value) => {
//     Logger.info(value);
// });
//
// Logger.info('c');
//
// Logger.info('a');
//
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('b');
//     }, 100);
// }).catch((value) => {
//     Logger.info(value);
// });
//
// Logger.info('c');
//
// Logger.info('a');
//
// Promise.resolve('b').then((value) => {
//     Logger.info(value);
// });
//
// Logger.info('c');
//
// Logger.info('a');
//
// Promise.reject('b').catch((value) => {
//     Logger.info(value);
// });
//
// Logger.info('c');

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(100);
//     }, 100);
// }).then((value) => {
//     Logger.info(1, value);
// }, (err) => {
//     Logger.error(2, err.message);
//     throw new Error(err.message);
// }).catch((err) => {
//     Logger.error(3, err.message);
// });

// let message = '';
//
// function foo() {
//     message += 'a';
// }
//
// function bar() {
//     message += 'b';
// }
//
// function baz() {
//     message += 'c';
// }
//
// foo();
//
// setTimeout(() => {
//     bar();
// }, 100);
//
// baz();
//
// function handler() {
//     ...
// }
//
// function retrieve() {
//     fetch('...', handler);
// }

// function foo() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(100);
//             resolve(100);
//         }, 100);
//     });
// }
//
// foo().then((value) => {
//     Logger.info(value);
// }).catch((err) => {
//     Logger.error(err);
// });

// function createFib(max) {
//     let last = -1, current = 1;
//
//     return function() {
//         [last, current] = [current, last + current];
//
//         if (current > max) {
//             return;
//         }
//
//         return current;
//     };
// }
//
// const fib = createFib(8);

// function* createFib(max) {
//     let last = -1, current = 1;
//
//     while (true) {
//         [last, current] = [current, last + current];
//
//         if (current > max) {
//             return;
//         }
//
//         yield current;
//     }
// }
//
// for(let value of createFib(10)) {
//     console.log(value);
// }

// function* sayHelloTo() {
//     return `Hello, ${yield}!`;
// }
//
// const hello = sayHelloTo();
// hello.next();
//
// console.log(hello.next('world'));

// const users = ['gaearon', 'jdalton', 'isaacs'];
//
// function getUser(name) {
//     requestPromise.get({url: `users/${name}`}).then((user) => {
//         it.next(user);
//     }).catch((err) => {
//         it.throw(err);
//     });
// }
//
// function* getUsers(name) {
//     try {
//         const user = yield getUser(name);
//         console.log(user);
//     } catch(err) {
//         console.error(err);
//     }
// }
//
// const it = getUsers('gaearon');
// it.next();

function send(email, cb) {

}

function contactFollowers(name, emailText) {
    request.get({url: `users/${name}/followers`}, (err, {body: followers}) => {
        console.log(followers);
        if (!err) {
            followers.forEach((follower) => {
                const {login} = follower;

                request.get({url: `users/${login}`}, (err, {body: user}) => {
                    if (!err) {
                        const {email, hireable} = user;
                        if (hireable) {
                            send(email, emailText, (err, ack) => {
                                if (!err) {
                                    console.log(ack);
                                } else {
                                    console.error('MAIL', err);
                                }
                            });
                        }
                    } else {
                        console.error('USER', err);
                    }
                });
            });
        } else {
            console.error('FOLLOWER', err);
        }
    });
}
contactFollowers('gaearon', '...');

call(something, {
    success: () => {...},
    error: () => {...}
});

[1, 2, ..., 100].forEach((item) => {
    ...
});
