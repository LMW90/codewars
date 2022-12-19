/* In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []
*/
function twoHighest(arr) {
  // keep only unique entries
  arr = [...new Set(arr)];
  // if less than two return all of them
  if (arr.length < 2) return arr;
  // else sort in descending order and return first two
  arr.sort((a,b)=>b-a);
  return arr.slice(0,2);
}