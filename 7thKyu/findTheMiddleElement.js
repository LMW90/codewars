/* As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).
*/

function gimme (triplet) {
  let minIndex = triplet.indexOf(Math.min(...triplet))
  let maxIndex = triplet.indexOf(Math.max(...triplet))
  const iterator = triplet.keys()
  for (const key of iterator){
    if (key !== maxIndex && key !== minIndex){
      return key
    }
  }
}