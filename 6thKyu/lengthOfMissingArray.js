/* You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3


If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays. 
*/
function getLengthOfMissingArray(arrayOfArrays) {
  // handle edge cases
  if (arrayOfArrays == null) return 0;
  if (arrayOfArrays.length == 0) return 0;
  if (arrayOfArrays.some(array => array == null || array.length == 0)) return 0;
  // map arrays to lengths and sort
  const lengths = arrayOfArrays.map(array => array.length).sort((a,b)=>a-b);
  let missing;
  // find missing element of sequence
  lengths.forEach((len, index, arr) => {
    if (arr[index+1] - len > 1) missing = len + 1;
  })
  return missing;
}
