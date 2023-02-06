/* Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.
*/
function evenLast(numbers) {
  // handle empty arrays
  if (!numbers.length) return 0;
  // calculate sum of even-indexed items
  const sum =  numbers.reduce((acc, ele, ind) =>{
    if (ind % 2 === 0) return acc + ele;
    return acc;
  }, 0);
  // return sum multiplied by last item
  return sum * numbers[numbers.length-1]
}