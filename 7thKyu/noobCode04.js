/* Write a function that takes two arguments, and returns a new array populated with the elements that only appear once, in either one array or the other, taken only once; display order should follow what appears in arr1 first, then arr2:

hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5]) // [4, 5]
hotSingles(["tartar", "blanket", "cinnamon"], ["cinnamon", "blanket", "domino"]) // ["tartar", "domino"]
hotSingles([77, "ciao"], [78, 42, "ciao"]) // [77, 78, 42]
hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5, 4]) // [4,5]
*/
function hotSingles(arr1, arr2) {
  // innitialize return array
  let difference = [];
  // populate array with elements exclusive for each array
  for (let i = 0; i < arr1.length; i++) if (!arr2.includes(arr1[i])) difference.push(arr1[i]);
  for (let i = 0; i < arr2.length; i++) if (!arr1.includes(arr2[i])) difference.push(arr2[i]);
  // filter out duplicates and return
  difference = [...new Set(difference)];
  return difference;
}