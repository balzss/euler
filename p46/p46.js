#!/usr/bin/env node

// It was proposed by Christian Goldbach that every odd composite number can be written as the sum of a prime and twice a square.
// 9 = 7 + 2×1^2
// 15 = 7 + 2×2^2
// 21 = 3 + 2×3^2
// 25 = 7 + 2×3^2
// 27 = 19 + 2×2^2
// 33 = 31 + 2×1^2
// It turns out that the conjecture was false.
// What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?

function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

for (let i = 3; ; i+=2) {
    let found = false;
    if (isPrime(i)) continue;
    for (let j = 2; j <= i; j++) {
        if (!isPrime(j)) continue;
        for (let k = 1; k <= j; k++) {
            if (j + 2 * k * k === i) {
                found = true;
                break;
            }
        }
    }
    if(!found) {
        console.log(i);
        break;
    }
}
