#!/usr/bin/env node

// Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:
// 1634 = 14 + 64 + 34 + 44
// 8208 = 84 + 24 + 04 + 84
// 9474 = 94 + 44 + 74 + 44
// As 1 = 14 is not a sum it is not included.
// The sum of these numbers is 1634 + 8208 + 9474 = 19316.
// Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.

function digits(n) {
    return n.toString().split('').map(x => parseInt(x, 10));
}

function raisedSum(n, x) {
    return digits(n).map(i => (parseInt(i, 10) ** x)).reduce((a, b) => a + b, 0);
}

let sum = 0;

// only cheching until a million because ((9 ** 5) * 7) < 1,000,000
for (let i = 2; i < 1000000; i++) {
    if(raisedSum(i, 5) === i) sum += i;
}

console.log(sum);
