/* Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
*/
function arrayMadness(a, b) {
  return a.reduce((acc, item)=> acc + item **2, 0) > b.reduce((acc, item)=> acc + item **3, 0)
}