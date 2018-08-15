#!/usr/bin/env node

const pir = [
    [75],
    [95, 64],
    [17, 47, 82],
    [18, 35, 87, 10],
    [20, 04, 82, 47, 65],
    [19, 01, 23, 75, 03, 34],
    [88, 02, 77, 73, 07, 63, 67],
    [99, 65, 04, 28, 06, 16, 70, 92],
    [41, 41, 26, 56, 83, 40, 80, 70, 33],
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
    [63, 66, 04, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
    [04, 62, 98, 27, 23, 09, 70, 98, 73, 93, 38, 53, 60, 04, 23],
];

// generating the 1st two row of pathValue pyramid by hand because its easier than implementing it in the loop
let pathValues = [
    [
        pir[0][0]
    ],
    [
        pir[0][0] + pir[1][0], 
        pir[0][0] + pir[1][1]
    ]
];

for (let i = 2; i < pir.length; i++) {
    pathValues.push([pathValues[i - 1][0] + pir[i][0]]);
    for (let j = 1; j < pir[i].length - 1; j++) {
        pathValues[i].push(Math.max(pathValues[i - 1][j - 1], pathValues[i - 1][j]) + pir[i][j]);
    }
    pathValues[i].push(pathValues[i - 1][pir[i - 1].length - 1] + pir[i][pir[i].length - 1]);
}

console.log(Math.max(...pathValues[pathValues.length - 1]));
