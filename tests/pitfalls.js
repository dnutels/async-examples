'use strict';

const Logger = require('../lib/common/logger');

const {request, requestPromise} = require('./common');

// function doSomething() {
//     return new Promise((resolve, reject) => {
//         process.nextTick(() => {
//             resolve(100);
//         });
//     })
// }
//
// function doSomethingElse(x) {
//     return x * 2;
// }
//
// doSomething().then(function () {
//   return doSomethingElse();
// }).then((value) => {
//     console.log(value);
// });
//
// doSomething().then(function () {
//   doSomethingElse();
// }).then((value) => {
//     console.log(value);
// });
//
// doSomething().then(doSomethingElse()).then((value) => {
//     console.log(value);
// });
//
// doSomething().then(doSomethingElse).then((value) => {
//     console.log(value);
// });

function a() {
    console.log('a');
    setTimeout(b, 100);
    c();
}

function b() {
    console.log('b');
}

function c() {
    console.log('c');
}

a();
