#!/usr/bin/env node

// sum of all uints that cannot be written as `u = a1 + a2` where a1 and a2 are abundant sums
// collect all abundant sums under 28123/2
// check every number until 28123 if:
//     - for(a of abSums) if (abSums.indexOf(n - a) > -1) return true; if(a > n/2) break;

let abSums = [];

for (let i = 0; i < 28123; i++) {
    if (isAbSum(i)) abSums.push(i);
}

function isAbSum(n) {
    let sumOfN = 1;
    for (let i = 2; i < n/2 + 1; i++) {
        if (n % i === 0) {
            sumOfN += i;
        }
        if (sumOfN > n) return true;
    }
    return false;
}

function isAbSumsSum(n) {
    for (a of abSums) {
        if (a > n/2) return false;
        if (abSums.indexOf(n - a) > -1) {
            return true;

        }
    }
    return false;
}

let sumOfNoAbSumsSum = 0;

for (let i = 0; i < 28123; i++) {
    if (!isAbSumsSum(i)) {
        sumOfNoAbSumsSum += i;
    }
}

console.log(sumOfNoAbSumsSum);
