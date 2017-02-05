'use strict';

const Logger = require('../lib/common/logger');

// const rq = require('request');
// const rqp = require('request-promise');
//
// const CONFIG = {
//     baseUrl: 'https://api.github.com',
//     json: true,
//     headers: {
//         'User-Agent': '',
//         'Authorization': 'token'
//     }
// };

// const request = rq.defaults(CONFIG);
// const requestPromise = rqp.defaults(CONFIG);
//
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

let message = '';

function foo() {
    message += 'a';
}

function bar() {
    message += 'b';
}

function baz() {
    message += 'c';
}

foo();

setTimeout(() => {
    bar();
}, 100);

baz();

function handler() {
    ...
}

function retrieve() {
    fetch('...', handler);
}
