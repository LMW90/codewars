/* You are given an array of values.

Sum every number value in the array, and any nested arrays (to any depth).

Ignore all other types of values.
*/
function arraySum(arr) {
  // flatten array as much as it takes and sum the elements of resultant vector
  return arr.flat(Infinity).reduce((sum, current) => {
    // skip non-numbers
    if (typeof current === "number") return sum + current;
    return sum;
  }, 0);
}