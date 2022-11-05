/* Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/
var countBits = function(n) {
  // start with eliminating 0 input
  if (n === 0) return 0
  // convert input number into a string of 0s and 1s
  n = n.toString(2)
  // find all 1s
  const ones = n.match(/1/g)
  // return the number of 1s found or zero if none found
  return ones.length || 0
};