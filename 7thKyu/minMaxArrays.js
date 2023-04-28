/* In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

For example:

solve([15,11,10,7,12]) = [15,7,12,10,11]

The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

More examples in the test cases.

Good luck!
*/
function solve(arr){
  // sort input array;
  arr.sort((a,b) => a - b);
  let minMaxArray = [];
  // intercahngingle append to result last and first elements of sorted array
  while (arr.length){
    minMaxArray.push(arr.pop());
    // catch odd length arrays
    if (!arr.length) break;
    minMaxArray.push(arr.shift());
  }
  return minMaxArray;
};
