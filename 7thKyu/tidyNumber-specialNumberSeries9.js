/* Definition

A Tidy number is a number whose digits are in non-decreasing order.
Task

Given a number, Find if it is Tidy or not . 
*/
function tidyNumber(n){
  // create an array of digits
  let digits = n.toString().split('');
  // test if every digit past first one is >= than it's predecessor
  return digits.every((digit, index) => index === 0 || digit >= digits[index-1]);
};