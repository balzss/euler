#!/usr/bin/env node

// The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.
// Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.
// (Please note that the palindromic number, in either base, may not include leading zeros.)

function isPali(n) {
    const binStr = n.toString(2);
    const binLen = binStr.length;

    for(let i = 0; i < binLen; i++) {
        if(binStr[i] !== binStr.charAt(binLen - i - 1)) {
            return false;
        }
    }
    return true;
}

let sum = 0;

for(let i = 1; i < 10000; i++) {
    const numStr = i.toString();
    const reversed = numStr.split('').reverse().join('');
    const deciPali1 = parseInt(numStr + reversed, 10);
    const deciPali2 = parseInt(numStr + reversed.slice(1), 10);

    if(isPali(deciPali1)) sum += deciPali1;
    if(isPali(deciPali2)) sum += deciPali2;
}

console.log(sum);
