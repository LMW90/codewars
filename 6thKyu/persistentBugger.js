/* Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/
function persistence(num) {
  // initialize variable for operation count
  let count = 0
  // loop until number is single digit
  for (let i = 0; num > 9; i++){
    // turn number into array of digits, reduce it into a product of it's multiplication and assign back
    num = num.toString().split('').reduce((product,digit)=> product *= +digit , 1)
    // increment the count
    count++
  }
  // return the count
  return count
}