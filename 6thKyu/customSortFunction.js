/* Complete the sort function so that it returns the items passed into it in alphanumerical order. Conveniently enough, the standard array sort method has been disabled for you so that you are forced to create your own.

Example:

sort([1,3,2]) // should return [1,2,3]
*/
function sort(arr){
  // a bubble sort
  for (let i = 0; i < arr.length - 1; i++){
    for (let j = 0; j < arr.length - 1 - i; j++){
      if (arr[j] > arr[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  return arr;
}