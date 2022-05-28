"use strict";
//take an array of non-zero numbers
//separate the +num to the left and -num to the right
//don't sort
//return orginal updated array
//O(n)

/**Function separatePositive() takes an array of non-zero numbers and returns orginal array with +num on left and -num on right
 * [2, -1, -3, 6] => [2, 6, -3, -1]
  */
// add whatever parameters you deem necessary & write docstring

function separatePositive(nonZeros) {
    const negatives = [];

    for(let num of nonZeros) {
        if (num < 0) {
            negatives.push(nonZeros.splice(num,1))
        }
    }
    for(let num of negatives) {
        nonZeros.push(num)
    }
    return nonZeros
}
