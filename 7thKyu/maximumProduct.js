/* Task
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
Notes

    Array/list size is at least 2.

    Array/list numbers could be a mixture of positives, negatives also zeroes .
*/
function adjacentElementsProduct(arr) {
  return arr.reduce((acc,item,index) => {
    // guard end of array
    if (index === arr.length - 1) return acc
    // if current product is bigger than accumulator assign it to accumulator
    return (item * arr[index + 1] > acc) 
      ? item * arr[index + 1] 
    // else keep current accumulator
      : acc
  }, -Infinity)
}