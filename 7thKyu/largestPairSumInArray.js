/* Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

Input sequence contains minimum two elements and every element is an integer.
*/
function largestPairSum (numbers) {
  let largest = -Infinity;
  // find the largest
  numbers.forEach(number => {if (number > largest) largest = number;});
  // determine if largest is unique
  let isLargestUnique = numbers.filter(number=>number === largest).length > 1 ? false : true;
  if (!isLargestUnique) return 2*largest;
  // find second largest if largest is not unique and return the sum
  let secondLargest = -Infinity;
  numbers.forEach(number => {if (number > secondLargest && number < largest) secondLargest = number});
  return largest + secondLargest;
}