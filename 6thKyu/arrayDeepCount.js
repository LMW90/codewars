/* You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.
Examples

[]                   -->  0
[1, 2, 3]            -->  3
["x", "y", ["z"]]    -->  4
[1, 2, [3, 4, [5]]]  -->  7

The input will always be an array.
*/
function deepCount(a){
  // define counter out of the loop
  let count = 0;
  // count all elements, if element is an array count subelements recursively
  for (let i = 0; i < a.length; i++){
    count++;
    if (Array.isArray(a[i])) {count += deepCount(a[i])}
  }
  // return the count
  return count;
}