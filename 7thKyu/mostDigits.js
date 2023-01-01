/* Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/
function findLongest(array){
  // create an array of lengths
  let lengths = array.map(num => num.toString().length);
  // find index of maximum (first from the start) length 
  let index = lengths.findIndex(length => lengths.every(item => item <= length));
  // return respective element of input array
  return array[index];
}