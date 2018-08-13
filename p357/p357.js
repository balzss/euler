#!/usr/bin/env node

// Consider the divisors of 30: 1,2,3,5,6,10,15,30.
// It can be seen that for every divisor d of 30, d+30/d is prime.
// Find the sum of all positive integers n not exceeding 100 000 000
// such that for every divisor d of n, d+n/d is prime.
let primeList = [];

function isPrime(n) {
    if(n === 2) return true;
    if(n % 2 === 0) return false;
    if(n === 1) return false;

    for (let i = 3; i < Math.sqrt(n); i += 2) {
        if(n % i === 0) {
            return false;
        }
    }

    return true;
}

function isInteresting(n) {
    for(let i = 0; i < Math.sqrt(n); i++) {
        if(n % i === 0) {
            if(!isPrime(i + n/i)) return false;
        }
    }
    return true;
}

let sum = 0;

for(let i = 2; i < 100000000; i += 4) {
    if (isInteresting(i)) {
        sum += i;
    }
}

// sum = 0;
// for(let i = 0; i < 4000000; i += 2) {
//     if (isInteresting(i)) {
//         sum += i;
//     }
// }

console.log(sum);
