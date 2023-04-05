/* Linked lists are data structures composed of nested or chained objects, each containing a single value and a reference to the next object.

Here's an example of a list:

{value: 1, next: {value: 2, next: {value: 3, next: null}}}

Write a function listToArray (or list_to_array in Python) that converts a list to an array, like this:

[1, 2, 3]

Assume all inputs are valid lists with at least one value. For the purpose of simplicity, all values will be either numbers, strings, or Booleans.
*/
function listToArray(list) {
  // array to store data
  let resultArray = [];
  // as long as list points to not a null
  while (list !== null) {
    // push current node's value and move pointer to next node
    resultArray.push(list.value);
    list = list.next;
  }
  // return the result
  return resultArray;
}