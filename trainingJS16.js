/* Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.

The first mission: Traversing arr, find the shortest string length.

The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0).
You can use one of slice() substring() or substr() do it. return the result after finished the work.
*/
function cutIt(arr){
  // find minimum string length
  let minLength = Math.min(...arr.map(str=>str.length))
  // map arr items into slices
  return arr.map(str=>str.slice(0,minLength))
}