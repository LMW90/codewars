/* Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.
Examples

["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"
*/
function checkThreeAndTwo(array) {
  // if more than two unique elements
  if (new Set(array).size != 2) return false;
  // if count of first element not 2 or 3
  if (![2,3].includes(array.filter(e => e == array[0]).length)) return false;
  return true;
}