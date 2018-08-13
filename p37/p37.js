#!/usr/bin/env node

// The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.
// Find the sum of the only eleven primes that are both truncatable from left to right and right to left.
// NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.

function isPrime(n) {
    if(n === 2) return true;
    if(n % 2 === 0) return false;
    if(n === 1) return false;
    for (let i = 3; i < n/2; i += 2) {
        if(n % i === 0) return false;
    }
    return true;
}

function truncer(n) {
    if(!isPrime(n)) return false;

    const numStr = n.toString();
    const numLen = numStr.length;

    for(let i = 1; i < numLen; i++) {
        if(!isPrime(parseInt(numStr.slice(0, i), 10))) return false;
        if(!isPrime(parseInt(numStr.slice(numLen - i), 10))) return false;
    }
    return true;
}

let counter = 0;
let sum = 0;

for(let i = 10; counter < 11; i++) {
    if(truncer(i)) {
        counter++;
        sum += i;
        console.log(i);
    }
}

console.log(sum);
