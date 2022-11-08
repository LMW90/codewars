/* riangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

1st (1)   2nd (3)    3rd (6)
*          **        ***
           *         **
                     *

You need to return the nth triangular number. You should return 0 for out of range values:

For example: (Input --> Output)

0 --> 0
2 --> 3
3 --> 6
-10 --> 0
*/
// Return the nth triangular number
function triangular( n ) {
  // check for invalid numbers
  if (n <= 1) return 0
  // formula for sum of first n natural numbers
  return 0.5 * n * (n + 1)
}