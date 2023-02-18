/* Write a function that determines whether the passed in arrays are similar. Similar means they contain the same elements, and the same number of occurrences of elements.

const arr1 = [1, 2, 2, 3, 4],
      arr2 = [2, 1, 2, 4, 3],
      arr3 = [1, 2, 3, 4],
      arr4 = [1, 2, 3, "4"]

arraysSimilar(arr1, arr2); // Should equal true
arraysSimilar(arr2, arr3); // Should equal false
arraysSimilar(arr3, arr4); // Should equal false
*/
function arraysSimilar(arr1, arr2) {
  // determine if arrays are same length
  if (arr1.length !== arr2.length) return false;
  // sort arrays and compare respective elements
  arr1.sort();
  arr2.sort();
  return arr1.every((element, index) => element === arr2[index]);
}