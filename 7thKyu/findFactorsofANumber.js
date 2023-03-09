/* Create a function that takes a number and finds the factors of it, listing them in descending order in an array.

If the parameter is not an integer or less than 1, return -1. In C# return an empty array.

For Example: factors(54) should return [54, 27, 18, 9, 6, 3, 2, 1]
*/
function factors(x){
  // test for invalid input
  if (!Number.isInteger(x) || x < 1) return -1;
  let factors = [];
  // starting from itself append factors to result array
  for (let i = 1; i <= x; i++){
    if (x%i === 0) factors.push(x/i);
  }
  return factors;
}