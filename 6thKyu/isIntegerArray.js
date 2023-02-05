/* Write a function with the signature shown below:

function isIntArray(arr) {
  return true
}

    returns true  / True if every element in an array is an integer or a float with no decimals.
    returns true  / True if array is empty.
    returns false / False for every other input.

*/
function isIntArray(arr) {
  // return false for invalid input
  if (!Array.isArray(arr)) return false;
  // return true if empty array or every item is an integer
  if (!arr.length || arr.every(item => Number.isInteger(item))) return true;
  // return false
  return false;
}