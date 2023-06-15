/* Given a string and an array of integers representing indices, capitalize all letters at the given indices.

For example:

    capitalize("abcdef",[1,2,5]) = "aBCdeF"
    capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.

The input will be a lowercase string with no spaces and an array of digits.

Good luck!
*/
function capitalize(s, arr) {
  // save indices to set so map can make checks at O(1)
  let indices = new Set(arr);
  // split, map characters with index in set to upper case, join and return
  return s
    .split('')
    .map((char, index) => indices.has(index) ? char.toUpperCase() : char)
    .join('');
};