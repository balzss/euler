#!/usr/bin/env node

// The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.
// There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.
// How many circular primes are there below one million?

function isPrime(n) {
    if(n === 2) return true;
    if(n % 2 === 0) return false;
    if(n === 1) return false;
    for (let i = 3; i < n/2; i += 2) {
        if(n % i === 0) return false;
    }
    return true;
}

function rotator(n) {
    const numStr = n.toString();
    const numLen = numStr.length;
    for(let i = 0; i < numLen; i++) {
        const circ = numStr.slice(i) + numStr.slice(0, i)
        if(!isPrime(parseInt(circ, 10))) return false;
    }
    return true;
}

let acc = 0;
for(let i = 0; i < 1000000; i++) {
    if(rotator(i)) {
        acc++;
    }
}

console.log(acc);
