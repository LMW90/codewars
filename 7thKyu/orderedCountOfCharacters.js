/* Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/
const orderedCount = function (text) {
  // map the counts to characters
  let map = new Map();
  for (let char of text) {
    if (map.has(char)) map.set(char, map.get(char) + 1);
    else map.set(char, 1);
  }
  // convert the map into array and return
  return Array.from(map);
}