'use strict';

const test = require('supertape');
const sum = require('..');
const tryCatch = require('try-catch');

test('sum: numbers with simular size', (t) => {
    const actual = sum('123', '321');
    const expect = '444';

    t.equal(actual, expect);
    t.end();
})

test('sum: numbers with big size', (t) => {
    const actual = sum(Array(100).fill('1'), Array(100).fill('2'));
    const expect = Array(100).fill('3').join('').toString();

    t.equal(actual, expect);
    t.end();
})

test('sum: empty arguments', (t) => {
    const [error] = tryCatch(sum);

    t.equal(error.message, 'number invalid!');
    t.end();
}) 
