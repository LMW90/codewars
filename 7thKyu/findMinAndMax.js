/* Implement a function that returns the minimal and the maximal value of a list (in this order).
*/
function getMinMax(arr) {
  // call Math.min/max with spread argument
  return [Math.min(...arr), Math.max(...arr)];
};