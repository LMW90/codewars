/* Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/
function moveZeros(arr) {
  // sort the array
  arr.sort((a,b) => {
    // if neither element is 0, do nothing
    if (a !== 0 && b !== 0) return 0
    // if first element is zero move to back
    if (a === 0) return 1
    // if second element is zero move to front
    if (b === 0) return -1
  })
  // return the sorted array
  return arr
}