/* You have to create a method "compoundArray" which should take as input two int arrays of different length and return one int array with numbers of both arrays shuffled one by one.

Input - {1,2,3,4,5,6} and {9,8,7,6} 
Output - {1,9,2,8,3,7,4,6,5,6}
*/
function compoundArray(a, b) {
  let combined = [];
  let max = Math.max(a.length, b.length);
  // push items intechangingly if not out of given array's length
  for (let i = 0; i < max; i++){
    if (i < a.length) combined.push(a[i])
    if (i < b.length) combined.push(b[i])
  }
  return combined;
}