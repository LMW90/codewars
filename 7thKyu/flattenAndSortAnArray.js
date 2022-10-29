"use strict";
/* Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
*/
function flattenAndSort(array) {
  // reduce array by concatenating each element into accumulator array
  return array.reduce((combined, current) => combined.concat(current),[])
    .sort((a,b) => a - b) // sort result numerically
}