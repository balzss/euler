#!/usr/bin/env node

let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// from https://github.com/trekhleb/javascript-algorithms/blob/00f75028bfe754f2b68b991528dfd4f461951ab6/src/algorithms/sets/permutations/permutateWithoutRepetitions.js
function permutateWithoutRepetitions(permutationOptions) {
    if (permutationOptions.length === 1) {
        return [permutationOptions];
    }

    // Init permutations array.
    const permutations = [];

    // Get all permutations for permutationOptions excluding the first element.
    const smallerPermutations = permutateWithoutRepetitions(permutationOptions.slice(1));

    // Insert first option into every possible position of every smaller permutation.
    const firstOption = permutationOptions[0];

    for (let permIndex = 0; permIndex < smallerPermutations.length; permIndex += 1) {
        const smallerPermutation = smallerPermutations[permIndex];

        // Insert first option into every possible position of smallerPermutation.
        for (let positionIndex = 0; positionIndex <= smallerPermutation.length; positionIndex += 1) {
            const permutationPrefix = smallerPermutation.slice(0, positionIndex);
            const permutationSuffix = smallerPermutation.slice(positionIndex);
            permutations.push(permutationPrefix.concat([firstOption], permutationSuffix));
        }
    }

    return permutations;
}

console.log(permutateWithoutRepetitions(digits).map(x => x.join('')).sort()[999999]);
