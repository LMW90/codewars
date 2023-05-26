/* Task

Given an array of integers, your function bubblesortOnce/bubblesort_once/BubblesortOnce (or equivalent, depending on your language's naming conventions) should return a new array equivalent to performing exactly 1 complete pass on the original array. Your function should be pure, i.e. it should not mutate the input array.
*/
function bubblesortOnce(a) {
  // copy array
  let passed = a.slice();
  // perform single bubble sort pass over copied array
  for (let i = 0; i < passed.length; i++) {
    if (passed[i] > passed[i+1]) [passed[i],passed[i+1]] = [passed[i+1],passed[i]];
  }
  // return copied array
  return passed;
}