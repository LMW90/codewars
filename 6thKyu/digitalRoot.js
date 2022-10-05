// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

function digitalRoot(n) {
  if (n < 10){ // base case
    return String(n).split('').reduce((acc, val)=>acc + +val, 0)
  }
  n = String(n).split('').reduce((acc, val)=>acc + +val, 0) // recursive case
  return digitalRoot(n)
}
//math says hello
// function digital_root(n) {
//   return (n - 1) % 9 + 1; // -1 + 1 handles input 9
// }

