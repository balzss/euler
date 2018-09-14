#!/usr/bin/env node

// A common security method used for online banking is to ask the user for three random characters from a passcode. For example, if the passcode was 531278, they may ask for the 2nd, 3rd, and 5th characters; the expected reply would be: 317.
// The text file, keylog.txt, contains fifty successful login attempts.
// Given that the three characters are always asked for in order, analyse the file so as to determine the shortest possible secret passcode of unknown length.

let sList = ['319', '680', '180', '690', '129', '620', '762', '689', '762', '318', '368', '710', '720', '710', '629', '168', '160', '689', '716', '731', '736', '729', '316', '729', '729', '710', '769', '290', '719', '680', '318', '389', '162', '289', '162', '718', '729', '319', '790', '680', '890', '362', '319', '760', '316', '729', '380', '319', '728', '716'];

let orders = {};

for (s of sList) {
    for (d of s) {
        !(d in orders) && (orders[d] = new Set());
    }

    orders[s[0]].add(s[1]);
    orders[s[0]].add(s[2]);
    orders[s[1]].add(s[2]);
}

console.log(orders);
