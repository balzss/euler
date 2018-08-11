#!/usr/bin/env node

function digits(n) {
    return n.toString().split('').map(x => parseInt(x, 10));
}

function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}

function isCurious(n) {
    let sum = 0;
    for (i of digits(n)) {
        sum += factorial(i);
        if (sum > n) return 0;
    }
    if (sum < n) return 0;
    return n;
}

let sum = 0;

for (let i = 3; i <= 10000000; i++) {
    sum += isCurious(i);
}

console.log(sum);
