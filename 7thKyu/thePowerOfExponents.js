/* Create a method called power that takes two integers and returns the value of the first argument raised to the power of the second.

Unlike the Exponent Method, you should also take in account negative exponents.

Your solution won't be tested against special cases leading to undefined values (0**-2 for example)

Note: The ** operator (JS: Math.pow) has been disabled.

Examples:

power(2, 3)   // 8
power(4, -2)  // 0.0625
*/
function power(base, exponent) {
  // handle 0 exponent
  if (exponent === 0) return 1;
  // calculate number of steps
  let steps = Math.abs(exponent);
  let result = 1;
  // perform steps
  while (steps) {
    steps--;
    result *= base;
  }
  // return the result
  return (exponent < 0) ? 1/result : result;
}