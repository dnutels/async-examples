'use strict';

function *myGenerator() {
    console.log('generator -- start');
    yield 'first';
    console.log('generator -- paused');
    const value = yield 'second';
    console.log('generator -- end');
    yield value;
    console.log('now REALLY generator -- end');
}

const it = myGenerator();

console.log(it.next());
console.log(it.next());
console.log(it.next('third'));
console.log(it.next());
