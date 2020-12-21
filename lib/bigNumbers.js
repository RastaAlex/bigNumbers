'use strict';

function sum(num1, num2) {
    let n = Number;
    const sumOfNumbers = [];
    let result = [];
    let residue = [];
    
    num1.length < num2.length ? n = num1.length : n = num2.length;
    
    for (let i = n - 1; i >= 0; i--) {
        result = Number(num1[i]) + Number(num2[i]);
        residue = Math.trunc(result / 10);
        sumOfNumbers.push(result % 10);
    }
    
    return sumOfNumbers.reverse().join('');
}

module.exports = sum;
