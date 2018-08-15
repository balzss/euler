#!/usr/bin/env node

// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

let ones = ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine'];
let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let tens = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

let numberString = '';

for(const h of ones) {
    const hund = h === '' ? '' : h + ' hundred and ';
    for(const teen of teens) {
        // console.log(hund + teen);
        numberString += hund + teen + '\n';
    }
    for(const t of tens) {
        for(const o of ones) {
            // console.log(t + o === '' ? h + 'hundred' : hund + t + o);
            numberString += t + o === '' ? h === '' ? '' : h + ' hundred' : hund + t + o;
            numberString += '\n';
        }
    }
}

numberString += 'one thousand';
console.log(numberString.replace(/\s+/g, ''));
console.log(numberString.replace(/\s+/g, '').length);
