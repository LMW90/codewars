/* Given an integer n and two other values, build an array of size n filled with these two values alternating.
Examples

5, true, false     -->  [true, false, true, false, true]
10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"    -->  []

Good luck!
*/
function alternate(n, firstValue, secondValue){
  // build an n length array with values determined by keys divisibility by 2 
  return Array.from({length: n}, (v,k) => (k % 2 == 0)? firstValue : secondValue);
}