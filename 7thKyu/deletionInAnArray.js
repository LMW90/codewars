/* The deleteValues function takes an array and removes elements that answer true to the pred function.

For some reason, some of the elements of the array for which the predicate holds are not deleted...

Can you fix the code?
*/
function deleteValues(array, pred) {
  console.log(pred.toString())
  for(var i = 0; i < array.length;) {
    if ( pred(array[i]) ) {
      // do not increment if element is removed
      array.splice(i, 1);
    } else {
      i++;
    }
  }
  return array;
}