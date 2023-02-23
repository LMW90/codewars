/* Write a function named numbers.

function should return True if all parameters are of the Number type.

The function should accept any number of parameters.

Example usage:

numbers(1, 4, 3, 2, 5); // true
numbers(1, "a", 3); // false
numbers(1, 3, NaN); // true
*/
function numbers(...args){
  // just spread arguments into array and test all elements for data type
  return args.every(item => typeof item === "number");
}