#!/usr/bin/env node

const nOfDigits = 10;
const modulo = 10 ** nOfDigits;
const seriesEnd = 1000;

function simplePow(n) {
    let partial = 1;
    for (let i = 0; i < n; i++) {
        partial = (partial * n) % modulo;
    }

    return partial % modulo;
}

let sum = 0;

for (let i = 1; i <= seriesEnd; i++) {
    sum = (sum + simplePow(i)) % modulo;
}

console.log(sum);
