// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
function cubeOdd(arr) {
  // sum cubed odd numbers in an array
  let result =  arr.reduce((acc, item) => {
    if (item % 2 !== 0) {acc += item ** 3};
    return acc;
  }, 0);
  // if any item was not a number return undefined, sum otherwise
  return (Number.isNaN(result)) ? undefined : result;
}