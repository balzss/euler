#!/usr/bin/env node

// Take the number 192 and multiply it by each of 1, 2, and 3:
// 192 × 1 = 192 192 × 2 = 384 192 × 3 = 576
// By concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated product of 192 and (1,2,3)
// The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which is the concatenated product of 9 and (1,2,3,4,5).
// What is the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product of an integer with (1,2, ... , n) where n > 1?

function swap(list, pos1, pos2) {
    const temp = list[pos1];
    list[pos1] = list[pos2];
    list[pos2] = temp;
}

function permute(list) {
    var out = [];
    list = typeof list === 'string' ? list.split('') : list;
    permuteList(list, list.length);

    function permuteList(list, n) {
        var i;

        if (n === 1) {
            out.push(list.join(''));
        } else {
            for (i = 0; i < n - 1; i++) {
                permuteList(list, n - 1);
                if (n % 2) {
                    swap(list, 0, n - 1);
                } else {
                    swap(list, i, n - 1);
                }
            }
            permuteList(list, n - 1);
        }
    }
    return out;
}

for (const i of permute([1, 2, 3, 4, 5, 6, 7, 8, 9]).sort().reverse()) {
    // console.log(parseInt(i, 10));
}
