/* Build a function that will take the length of each side of a triangle and return if it's either an Equilateral, an Isosceles, a Scalene or an invalid triangle.

It has to return a string with the type of triangle.
For example:

typeOfTriangle(2,2,1) --> "Isosceles"
*/
var typeOfTriangle = function (sideA, sideB, sideC) {
  // handle invalid input
  if ([...arguments].some(arg => !(arg > 0))) return "Not a valid triangle";
  // handle invalid triangle sides (including degenerate triangles)
  if (sideA >= sideB + sideC || sideB >= sideA + sideC || sideC >= sideA + sideB) return "Not a valid triangle";
  // create a set of unique arguments and return respective string according to set's size
  let uniqueLengths = new Set([...arguments]);
  if (uniqueLengths.size == 1) return "Equilateral";
  return (uniqueLengths.size == 2) ? "Isosceles" : "Scalene";
}