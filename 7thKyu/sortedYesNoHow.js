/* Complete the method which accepts an array of integers, and returns one of the following:

    "yes, ascending" - if the numbers in the array are sorted in an ascending order
    "yes, descending" - if the numbers in the array are sorted in a descending order
    "no" - otherwise

You can assume the array will always be valid, and there will always be one correct answer.
*/
function isSortedAndHow(array) {
  return (array.every((e,i) => { return (i < array.length - 1) ? e <= array[i+1] : true }))
    ? 'yes, ascending'
    : (array.every((e,i) => { return (i < array.length - 1) ? e >= array[i+1] : true }))
      ? 'yes, descending'
      : 'no'
}