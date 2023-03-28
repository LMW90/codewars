/* Extend the Array's built-in functions by implementing .max() method. This method will return the largest number in the array. If the array contains one or more non-number elements that can't be converted into numbers (e.g., string letters), return NaN

Example:

[2,5,1,3].max() // returns 5
[1,2,3,8,4,9,7,42,99].max() // returns 99
[2,'5',1,3].max() // returns 5 ("5" can be converted to 5)
[2,5,1,'ab'].max() // returns NaN ("ab" can't be converted to a number)

Array will contain at least one item.
*/
Array.prototype.max = function() {
  // initialize value to store maximum
  let max = this[0];
  // loop through items
  for (let item of this){
    // if any item is NaN after conversion return NaN
    if (Number.isNaN(+item)) return NaN;
    // else test if bigger, if true replace max with item converted to number
    else if (item > max) max = +item;
  }
  // return resultant maximum
  return max;
}