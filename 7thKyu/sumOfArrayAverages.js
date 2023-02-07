/* First, determine the average of each array. Then, return the sum of all the averages.

    All numbers will be less than 100 and greater than -100.
    arr will contain a maximum of 50 arrays.
    After calculating all the averages, add them all together, then round down, as shown in the example below:

The example given: sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]]), the answer being 44.

    Calculate the average of each individual array:

    [3, 4, 1, 3, 5, 1, 4] = (3 + 4 + 1 + 3 + 5 + 1 + 4) / 7 = 3
    [21, 54, 33, 21, 77] = (21 + 54 + 33 + 21 + 77) / 5 = 41.2

    Add the average of each array together:

    3 + 41.2 = 44.2

    Round the final average down:

    Math.floor(44.2) = 44

import math
math.floor(44.2) = 44
*/
const sumAverage = (arr) => {
  // reduce by adding to accumulator result of average function call
  let result = Math.floor(arr.reduce((a, i) => a + average(i), 0))
  return result;
}

// function calculating unrounded average of an array
const average = arr => {
  return arr.reduce((acc, item) => acc + item) / arr.length;
}